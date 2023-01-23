import axios from 'axios';
import dataSite  from '@/config'
import usersError  from './error'
const token = sessionStorage.getItem('token')

const users = {
    state: {
        users: []
    },
    getters: {
        getUsers: (state) => {
            return state.users
        }
    },
    mutations: {
        setUsers: (state, data) => {
            state.users = data
        }
    },
    actions: {
        appendUsers: ({commit},payload) => {
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
        generateUsers: ({ commit }) => {
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
            axios.get(dataSite.requestUrl + '/dashboard/users?page=1', config).then((res) => {
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
        deleteUsers: ({commit},data) => {
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

        }
    },
    modules: {usersError}
}
export default users
