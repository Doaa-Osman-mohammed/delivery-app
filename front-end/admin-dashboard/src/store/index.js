import { createStore } from 'vuex'
import products from './products'
import users from './users'
import categories from './categories'
import subSection from './subSection'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    categories,
    users,
    subSection
  }
})
