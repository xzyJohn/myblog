<template>
  <div style="text-align: center">
    <div style="margin-top: 20px;margin-bottom: 20px">
      <h1>注册</h1>
    </div>
    <div style="margin: 0 auto;width: 500px">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="userName">
          <Input v-model="formValidate.userName" placeholder="Enter your username"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input v-model="formValidate.password" placeholder="Enter your password"></Input>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
          <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
        </FormItem>
        <FormItem label="出生日期" prop="date">
          <Row>
            <Col span="11">
              <FormItem>
                <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
              </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="性别" prop="gender">
          <RadioGroup v-model="formValidate.gender" style="float: left;margin-left: 20px">
            <Radio label="男">男</Radio>
            <Radio label="女">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="个人简介" prop="introduce">
          <Input v-model="formValidate.introduce" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Regisiter',
    data() {
      return {
        formValidate: {
          userName: '',
          password: '',
          name: '',
          mail: '',
          gender: '',
          date: '',
          introduce: ''
        },
        ruleValidate: {
          userName: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
          name: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          mail: [
            {required: true, message: 'Mailbox cannot be empty', trigger: 'blur'},
            {type: 'email', message: 'Incorrect email format', trigger: 'blur'}
          ],
          gender: [
            {required: true, message: 'Please select gender', trigger: 'change'}
          ],

        }
      }
    },
    methods: {
      handleSubmit(name) {
        let self=this;

        this.$refs[name].validate((valid) => {
          if (valid) {
            console.log(self.formValidate);
            this.$axios({
              url:'/api/regisiter',//请求的地址
              method:'post',//请求的方式
              data:self.formValidate//请求的表单数据
            }).then(res=>{
              alert("注册成功！");
              this.$router.push({name:'Login'});
            }).catch(err=>{
              alert("错误信息！");
            })
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
