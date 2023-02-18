import axios from 'axios';
import dataSite from '@/config'
import diseasesError from './error'

const token = sessionStorage.getItem('token')

const diseases = {
    state: {
        diseases: [],
        diseasesUpdateTemp: {
            status: false,
            data: {}
        }
    },
    getters: {
        getDiseases: (state) => {
            return state.diseases
        },
        getDiseasesUpdateTemp: (state) => {
            return state.diseasesUpdateTemp
        }
    },
    mutations: {
        setDiseases: (state, data) => {
            state.diseases = data
        },
        setDiseasesUpdateTemp: (state, data) => {
            state.diseasesUpdateTemp = data
        }
    },
    actions: {
        appendDiseases: ({commit},payload) => {
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
            axios.post(dataSite.requestUrl + '/dashboard/diseases', payload, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                commit('setDiseasesError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateDiseases: ({ commit }) => {
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
            axios.get(dataSite.requestUrl + '/dashboard/diseases?page=1', config).then((res) => {
                console.log(res)
                commit('setDiseases', res.data.data)
            }).catch((error) => {
                commit('setDiseasesError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
                console.log(error)
            })
        },
        generateUpdateDiseases: ({ commit }, data) => {
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

            axios.get(dataSite.requestUrl + '/dashboard/diseases/' + data, config).then((res) => {
                console.log(res)
                commit('setDiseasesUpdateTemp', {
                    status: true,
                    data: res.data
                })
            }).catch((error) => {
                console.log(error)
                commit('setDiseasesError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        },
        updateDiseases: async ({ commit }, data) => {
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
            await axios.patch(dataSite.requestUrl + '/dashboard/diseases/' + data.id, data.data, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
                commit('setDiseasesError', {
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        },
        deleteDiseases: ({ commit }, data) => {
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
            axios.delete(dataSite.requestUrl + '/dashboard/diseases/' + data, config).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
                commit('setDiseasesError',{
                    title: error.response.data.message,
                    desc: error.response.data.file,
                    type: 'error',
                    status: true
                })
            })

        }
    },
    modules: {diseasesError}
}
export default diseases
