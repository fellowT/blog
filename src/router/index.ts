import Home from '../pages/home'
import Article from '../pages/article'
import {PagesType} from '../types/index'
const routes: PagesType[] = [
  {
    path:'/',
    component:Home,
    exact:true,
    name:'home'
  },
  {
    path:'/article',
    component:Article,
    name:'文章'
  }
]
export default routes