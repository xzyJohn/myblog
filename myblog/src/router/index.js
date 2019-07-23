import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/blog/Index'
import ArticleManage from "../components/blog/ArticleManage";
import CreateArticle from "../components/blog/CreateArticle";
import MyArticle from "../components/blog/MyArticle";
import MyDraft from "../components/blog/MyDraft";
import Login from "../components/Login"
import Regisiter from "../components/register/Regisiter"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component:Login,
    },
    {
      path:'/regisiter',
      name:'Regisiter',
      component:Regisiter,
    },
    {
      path: '/blog',
      name: 'Index',
      component: Index,
      children:[
        {
          path: 'ArticleManage',
          name:'ArticleManage',
          component: ArticleManage,
        },
        {
          path:'CreateArticle',
          name:'CreateArticle',
          component:CreateArticle,
        },
        {
          path:'MyArticle',
          name:'MyArticle',
          component:MyArticle,
        },
        {
          path:'MyDraft',
          name:'MyDraft',
          component:MyDraft,
        }
      ]
    },
  ]
})
