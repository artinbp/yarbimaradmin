import axios from 'axios';
import dataSite  from '@/config'
import {useRouter} from 'vue-router';
const router = useRouter()
const users = {
    state: {
        userInfo: {
            id:null,
            name:"",
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
                commit('setUserToken', res.data.token)
                localStorage.setItem('token', res.data.token)
                router.push('/')
            }).catch((error) => {

                console.log(error,dataSite.requestUrl + '/auth/login')
            })
        }
    },
    modules: {}

}
export default users
