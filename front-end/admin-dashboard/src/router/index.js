import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilePage from '../views/ProfilePage.vue'
import OrdersPage from '../views/OrdersPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import PaymentPage from '../views/PaymentPage.vue'
import OrderDetails from '../views/OrderDetails.vue'
import EditProduct from '../views/EditProduct.vue'
import AddProduct from '../views/AddProduct.vue'
import lastPayments from '../views/lastPayments.vue'
import LoginPage from '../views/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/ProfilePage",
    name:"ProfilePage",
    component:ProfilePage
  },
  {
    path:"/OrdersPage",
    name:"OrdersPage",
    component:OrdersPage,
  },
  {
    path:"/OrderDetails",
    name:"OrderDetails",
    component:OrderDetails
  },
  {
    path:"/ProductsPage",
    name:"ProductsPage",
    component:ProductsPage
  },
  {
    path:"/AddProduct",
    name:"AddProduct",
    component:AddProduct
  },
  {
    path:"/EditProduct",
    name:"EditProduct",
    component:EditProduct
  },
  {
    path:"/PaymentPage",
    name:"PaymentPage",
    component:PaymentPage
  },
  {
    path:"/lastPayments",
    name:"lastPayments",
    component:lastPayments
  },
  {
    path:"/LoginPage",
    name:"LoginPage",
    component:LoginPage
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
