import axios from 'axios';
import dataSite from '@/config'
import mediaError from './error'

const token = sessionStorage.getItem('token')

const media = {
    state: {
        media: [],
        thumbnail:'',
        mediaUpdateTemp: {
            status: false,
            data: {}
        }
    },
    getters: {
        getMedia: (state) => {
            return state.media
        },
        getThumbnail: (state) => {
            return state.thumbnail
        },
        getMediaUpdateTemp: (state) => {
            return state.mediaUpdateTemp
        }
    },
    mutations: {
        setMedia: (state, data) => {
            state.media = data
        },
        clearMedia: (state) => {
            state.media = []
            state.thumbnail = ''
        },
        setThumbnail: (state, data) => {
            state.thumbnail = data
        },
        appendMedia: (state, data) => {
            state.media.push(data)
        },
        deleteMedia: (state, data) => {
            state.media= state.media.filter((item)=>{
               return  item.id !==data
            })
        },
        setMediaUpdateTemp: (state, data) => {
            state.mediaUpdateTemp = data
        }
    },
    actions: {
        appendMedia: ({commit},payload) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            const config = {
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            }
            axios.post(dataSite.requestUrl + '/dashboard/media', payload, config).then((res) => {
                console.log(res)
                commit('appendMedia',res.data)
                commit('setThumbnail',res.data.path)
            }).catch((error) => {
                commit('setMediaError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateMedia: ({ commit }) => {
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
            axios.get(dataSite.requestUrl + '/dashboard/media?page=1', config).then((res) => {
                console.log(res)
                commit('setMedia', res.data.data)
            }).catch((error) => {
                commit('setMediaError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateUpdateMedia: ({ commit }, data) => {
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

            axios.get(dataSite.requestUrl + '/dashboard/media/' + data, config).then((res) => {
                console.log(res)
                commit('setMediaUpdateTemp', {
                    status: true,
                    data: res.data
                })
            }).catch((error) => {
                console.log(error)
                commit('setMediaError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        },
        updateMedia: async ({ commit }, data) => {
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
            await axios.patch(dataSite.requestUrl + '/dashboard/media/' + data.id, data.data, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
                commit('setMediaError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        },
        deleteMedia: ({ commit }, data) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
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
            axios.delete(dataSite.requestUrl + '/dashboard/media/' + data, config).then((res) => {
                console.log(res)
                commit('deleteMedia',data)
            }).catch((error) => {
                console.log(error)
                commit('setMediaError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        }
    },
    modules: {mediaError}
}
export default media
