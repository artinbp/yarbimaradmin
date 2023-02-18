
const mediaError = {
    state: {
        mediaError:{
            title: '',
            desc: '',
            type: '',
            status: false
        }
    },
    getters: {
        getMediaError: (state) => {
            return state.mediaError
        }
    },
    mutations: {
        setMediaError: (state, data) => {
            state.mediaError = data
        }
    },
    actions: {
    },
    modules: {}

}
export default mediaError
