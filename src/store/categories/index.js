import axios from 'axios';
import dataSite from '@/config'
import categoriesError from './error'

const categories = {
    state: {
        categories: [],
        categoriesUpdateTemp: {
            status: false,
            data: {}
        }
    },
    getters: {
        getCategories: (state) => {
            return state.categories
        },
        getCategoriesUpdateTemp: (state) => {
            return state.categoriesUpdateTemp
        }
    },
    mutations: {
        setCategories: (state, data) => {
            state.categories = []
            data.forEach((cat) => {
                state.categories.push(cat)
                if (cat.children_recursive.length > 0) {
                    cat.children_recursive.forEach((subCat) => {
                        state.categories.push(subCat)
                        if (subCat.children_recursive.length > 0) {
                            subCat.children_recursive.forEach((subc) => {
                                state.categories.push(subc)
                            })
                        }
                    })
                }
            })
        },
        setCategoriesUpdateTemp: (state, data) => {
            state.categoriesUpdateTemp = data
        }
    },
    actions: {
        appendCategories: ({ commit }, payload) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ?? sessionStorage.getItem('token');
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token ?? sessionStorage.getItem('token'),
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.post(dataSite.requestUrl + '/dashboard/categories', payload, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                commit('setUsersError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateCategories: async ({ commit }) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ?? sessionStorage.getItem('token');
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token ?? sessionStorage.getItem('token'),
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }

            await axios.get(dataSite.requestUrl + '/dashboard/categories?page=1', config).then((res) => {
                console.log(res)
                commit('setCategories', res.data)
            }).catch((error) => {
                commit('setCategoriesError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateUpdateCategories: ({ commit }, data) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ?? sessionStorage.getItem('token');
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.get(dataSite.requestUrl + '/dashboard/categories/' + data, config).then((res) => {
                console.log(res)
                commit('setCategoriesUpdateTemp', {
                    status: true,
                    data: res.data
                })
            }).catch((error) => {
                console.log(error)
                commit('setCategoriesError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        },
        updateCategories: async ({ commit }, data) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ?? sessionStorage.getItem('token');
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            await axios.patch(dataSite.requestUrl + '/dashboard/categories/' + data.id, data, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
                commit('setUsersError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        },
        deleteCategories: ({ commit }, data) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ?? sessionStorage.getItem('token');
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.delete(dataSite.requestUrl + '/dashboard/categories/' + data, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
                commit('setCategoriesError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        }
    }
    , modules: {
        categoriesError
    }
}

export default categories
