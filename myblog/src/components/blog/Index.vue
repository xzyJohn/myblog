<!--suppress ALL -->
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            博 客
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              用户名
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              个人中心
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              退出
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu  active-name="1" style="width: 200px">
            <router-link to="/blog/MyArticle">
              <MenuItem name="1" >
                <Icon type="md-document" />
                我的随笔
              </MenuItem>
            </router-link>
            <router-link to="/blog/MyDraft">
              <MenuItem name="2">
                <Icon type="md-chatbubbles" />
                我的草稿
              </MenuItem>
            </router-link>
            <router-link to="/blog/ArticleManage">
              <MenuItem name="3">
                <Icon type="md-heart" />
                随笔管理
              </MenuItem>
            </router-link>
            <router-link to="/blog/MyDraft">
              <MenuItem name="4">
                <Icon type="md-leaf" />
                新建随笔
              </MenuItem>
            </router-link>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '600px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    name:"index",
  }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    text-align: center;
    color: aliceblue;
    line-height: 30px;
    font-size: 25px;

  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .lable-logo{
    font-size: 24px;
    color: aliceblue;
    text-align: center;

  }
</style>
