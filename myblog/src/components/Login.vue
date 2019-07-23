<template>
  <div style="text-align: center">
    <div style="padding-top: 70px;padding-bottom: 40px">
      <h1>欢迎来到登录页面</h1>
    </div>
    <div style="margin: 0 auto;">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" style="width: 200px;margin: 0 auto">
        <FormItem prop="userName">
          <Input type="text" v-model="formInline.userName" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button @click="withoutaccount()">没有账号</Button>
          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>

        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        formInline: {
          userName: '',
          password: ''
        },
        ruleInline: {
          userName: [
            {required: true, message: '请输入你的用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入你的密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不小于6位', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      withoutaccount() {
        this.$router.push({name: 'Regisiter'})
      },
      handleSubmit(name) {
        let self = this;
        this.$refs[name].validate((valid) => {
          console.log(self.formInline);
          if (valid) {
            this.$axios({
              url: '/api/login',
              method: 'post',
              data: self.formInline,
            }).then(res=>{
              console.log(res);
              this.$router.push({name:'Index'});
            }).catch(err=>{
              console.log(err);
              alert("错误信息！");
            })
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
