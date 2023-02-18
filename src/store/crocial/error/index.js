
const slidesError = {
    state: {
        slidesError:{
            title: '',
            desc: '',
            type: '',
            status: false
        }
    },
    getters: {
        getSlidesError: (state) => {
            return state.slidesError
        }
    },
    mutations: {
        setSlidesError: (state, data) => {
            state.slidesError = data
        }
    },
    actions: {
    },
    modules: {}

}
export default slidesError
