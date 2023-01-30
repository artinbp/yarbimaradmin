import axios from 'axios';
import dataSite  from '@/config'
import categoriesError  from './error'
const token = sessionStorage.getItem('token')

const categories = {
    state: {
        categories: []
    },
    getters: {
        getCategories: (state) => {
            return state.categories
        }
    },
    mutations: {
        setCategories: (state, data) => {
            state.categories = []
            data.forEach((cat)=>{
                state.categories.push(cat)
                if (cat.children_recursive.length>0){
                    cat.children_recursive.forEach((subCat)=>{
                        state.categories.push(subCat)
                        if (subCat.children_recursive.length>0){
                            subCat.children_recursive.forEach((subc)=>{
                                state.categories.push(subc)
                            })
                        }
                    })
                }
            })

        }
    },
    actions: {
        appendCategories: ({commit},payload) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.post(dataSite.requestUrl + '/dashboard/categories',payload, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                commit('setCategoriesError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateCategories: ({ commit }) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.get(dataSite.requestUrl + '/dashboard/categories?page=1', config).then((res) => {
                console.log(res)
                commit('setCategories', res.data)
            }).catch((error) => {
                commit('setCategoriesError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        deleteCategories: ({commit},data) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.delete(dataSite.requestUrl + '/dashboard/categories/'+data, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
                commit('setCategoriesError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        }
    },
    modules: {categoriesError}
}
export default categories
