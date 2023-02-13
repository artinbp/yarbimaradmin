import axios from 'axios';
import dataSite  from '@/config'
import disasesError  from './error'
const token = sessionStorage.getItem('token')

const disases = {
    state: {
        disases: [],
        disasesUpdateTemp: {
            status: false,
            data: {}
        }
    },
    getters: {
        getDisases: (state) => {
            return state.disases
        },
        getDisasesUpdateTemp: (state) => {
            return state.disasesUpdateTemp
        }
    },
    mutations: {
        setDisases: (state, data) => {
            state.disases = data
        },
        setDisasesUpdateTemp: (state, data) => {
            state.disasesUpdateTemp = data
        }
    },
    actions: {
        appendDisases: ({commit},payload) => {
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
            axios.post(dataSite.requestUrl + '/dashboard/products',payload, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                commit('setDisasesError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateDisases: ({ commit }) => {
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
            axios.get(dataSite.requestUrl + '/dashboard/products?page=1', config).then((res) => {
                console.log(res)
                commit('setProducts', res.data)
            }).catch((error) => {
                commit('setDisasesError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        deleteDisases: ({commit},data) => {
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
            axios.delete(dataSite.requestUrl + '/dashboard/products/'+data, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
                commit('setDisasesError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        }
    },
    modules: {disasesError}
}
export default disases
