import axios from 'axios';
import dataSite  from '@/config'
import slidesError  from './error'
const token = sessionStorage.getItem('token')

const slides = {
    state: {
        slides: [],
        slidesUpdateTemp: []

    },
    getters: {
        getSlides: (state) => {
            return state.slides
        },
        getSlidesUpdateTemp: (state) => {
            return state.slidesUpdateTemp
        }
    },
    mutations: {
        setSlides: (state, data) => {
            state.slides = data
        },
        setSlidesUpdateTemp: (state, data) => {
            state.slidesUpdateTemp = data
        }
    },
    actions: {
        appendSlides: ({commit},payload) => {
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
            axios.post(dataSite.requestUrl + '/dashboard/carousel',payload, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                commit('setSlidesError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateSlides: ({ commit }) => {
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
            axios.get(dataSite.requestUrl + '/dashboard/carousel?page=1', config).then((res) => {
                console.log(res)
                commit('setSlides', res.data)
            }).catch((error) => {
                commit('setSlidesError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateUpdateSlides: ({ commit }, data) => {
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

            axios.get(dataSite.requestUrl + '/dashboard/carousel/' + data, config).then((res) => {
                console.log(res)
                commit('setSlidesUpdateTemp', {
                    status: true,
                    data: res.data
                })
            }).catch((error) => {
                console.log(error)
                commit('setSlidesError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        },
        updateSlides: async ({ commit }, data) => {
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
            await axios.patch(dataSite.requestUrl + '/dashboard/carousel/' + data.id, data.data, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
                commit('setSlidesError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        },
        deleteSlides: ({commit},data) => {
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
            axios.delete(dataSite.requestUrl + '/dashboard/carousel/'+data, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
                commit('setSlidesError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        }
    },
    modules: {slidesError}
}
export default slides
