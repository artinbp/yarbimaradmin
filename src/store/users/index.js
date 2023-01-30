import axios from 'axios';
import dataSite  from '@/config'
import usersError  from './error'

const users = {
    state: {
        users: [],
        usersUpdateTemp:{
            status:false,
            data:{}
        }
    },
    getters: {
        getUsers: (state) => {
            return state.users
        },
        getUsersUpdateTemp: (state) => {
            return state.usersUpdateTemp
        }
    },
    mutations: {
        setUsers: (state, data) => {
            state.users = data
        },
        setUsersUpdateTemp: (state, data) => {
            state.usersUpdateTemp = data
        }
    },
    actions: {
        appendUsers: ({commit},payload) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token??sessionStorage.getItem('token');
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token??sessionStorage.getItem('token'),
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.post(dataSite.requestUrl + '/dashboard/users',payload, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                commit('setUsersError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateUsers: async ({ commit }) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token??sessionStorage.getItem('token');
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token??sessionStorage.getItem('token'),
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }

          await  axios.get(dataSite.requestUrl + '/dashboard/users?page=1', config).then((res) => {
                console.log(res)
                commit('setUsers', res.data.data.filter((item)=>item.role.name !== 'role_super_admin'))
            }).catch((error) => {
                commit('setUsersError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateUpdateUsers: ({commit},data) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token??sessionStorage.getItem('token');
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token??sessionStorage.getItem('token'),
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }

            axios.get(dataSite.requestUrl + '/dashboard/users/'+data, config).then((res) => {
                console.log(res)
                commit('setUsersUpdateTemp',{
                    status:true,
                    data:res.data
                })
            }).catch((error) => {
                console.log(error)
                commit('setUsersError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        },
        updateUsers: ({commit},data) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token??sessionStorage.getItem('token');
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token??sessionStorage.getItem('token'),
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.patch(dataSite.requestUrl + '/dashboard/users/'+data, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
                commit('setUsersError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        },
        deleteUsers: ({commit},data) => {
            const token = sessionStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token??sessionStorage.getItem('token');
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: 'Bearer ' + token??sessionStorage.getItem('token'),
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios.delete(dataSite.requestUrl + '/dashboard/users/'+data, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
                commit('setUsersError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        },
        getAddress: ({commit}) => {
            
        }
        
    },

    modules: {usersError}
}
export default users
