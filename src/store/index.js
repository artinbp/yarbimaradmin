import { createStore } from 'vuex'
import users from '@/store/users';
import categories from '@/store/categories';
import products from '@/store/products';
import user from '@/store/user';
import media from '@/store/media';
import slides from '@/store/crocial';


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
    categories,
    users,
    products,
    user,
    media,
    slides
  }
})

