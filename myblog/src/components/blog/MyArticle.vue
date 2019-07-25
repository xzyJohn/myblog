<template>
      <Table :columns="column" :data="data"></Table>
</template>

<script>
    export default {
        name: "MyArticle",
      data(){
          return{
            column:[
              {
                title:'文章名：',
                key:'articleName',
              },
              {
                title:'发表日期：',
                key:'articleDate',
              },
              {
                title:'作者：',
                key:'articleAuthor',
              },
              {
                title:'操作',
                key:'action',
                width:150,
                align:'center',
                render:(h,params)=>{
                  return h('div',[
                    h('Button',{
                      props:{
                        type:'primary',
                        size:'small',
                      },
                      on:{
                        click:()=>{
                          this.show(params.index);
                        }
                      }
                    },'详细'),
                  ]);
                }
              }
            ],
            data:[],
          }
      },
      methods:{
          show(index){
            this.$Modal.info({
              title:'详细信息',
              content:`标题：${this.data[index].articleName}<br>作者：${this.data[index].articleAuthor}<br>
发表日期：${this.data[index].articleDate}`
            })
          },
        getList(){
          const self=this;
          this.$axios.get('api/article',{}).then((res)=>{
            const result=res.data;
            self.data=result;
          })
        }
      },
      created() {
          this.getList();
      }

    }
</script>

<style scoped>

</style>
