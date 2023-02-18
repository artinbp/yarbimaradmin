
const diseasesError = {
    state: {
        diseasesError:{
            title: '',
            desc: '',
            type: '',
            status: false
        }
    },
    getters: {
        getDiseasesError: (state) => {
            return state.diseasesError
        }
    },
    mutations: {
        setDiseasesError: (state, data) => {
            state.diseasesError = data
        }
    },
    actions: {
    },
    modules: {}

}
export default diseasesError
