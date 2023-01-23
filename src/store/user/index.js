import axios from 'axios';
import dataSite  from '@/config'
import userError from './error'
const token = sessionStorage.getItem('token')
const user = {
    state: {
        userInfo: {
            id:1,
            name:"artin",
            username:"",
            email:"",
            number:"",
            lang:"",
            date_of_create:"",
            date_of_join:"",
            password:"",
            status:"",
            token:""
        },
        token: ''
    },
    getters: {
        getUserInfo: (state) => {
            return state.userInfo
        },
        getUserToken: (state) => {
            return state.token
        }
    },
    mutations: {
        setUserInfo: (state, data) => {
            state.userInfo = data
        },
        setUserToken: (state, data) => {
            state.token = data
        }
    },
    actions: {
        generateUserLogin: ({ commit }, data) => {
            axios.post(dataSite.requestUrl + '/auth/login', data, {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res)
                if (res.data.token){
                    commit('setUserToken', res.data.token)
                    sessionStorage.setItem('token', res.data.token)
                }


            }).catch((error) => {
                commit('setUserError',{
                    title: error.message,
                    code: error.status,
                    desc: error.response.data.message,
                    type: 'error',
                    status: true
                })
                console.log(error,dataSite.requestUrl + '/auth/login')
            })
        },
        generateUserInfo: ({ commit }) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            axios.get(dataSite.requestUrl + '/auth/user', {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                }
            }).then((res) => {
                console.log(res)
                commit('setUserInfo', res.data[0])

            }).catch((error) => {
                console.log(error,dataSite.requestUrl + '/auth/login')
                commit('setUserError',{
                    title: error.message,
                    code: error.status,
                    desc: error.response.data.message,
                    type: 'error',
                    status: true
                })
            })
        }
    },
    modules: {userError}

}
export default user
