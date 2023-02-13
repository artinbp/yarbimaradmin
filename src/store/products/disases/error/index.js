
const disasesError = {
    state: {
        disasesError:{
            title: '',
            desc: '',
            type: '',
            status: false
        }
    },
    getters: {
        getDisasesError: (state) => {
            return state.disasesError
        }
    },
    mutations: {
        setDisasesError: (state, data) => {
            state.disasesError = data
        }
    },
    actions: {
    },
    modules: {}

}
export default disasesError
