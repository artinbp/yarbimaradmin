
const categoriesError = {
    state: {
        categoriesError:{
            title: '',
            desc: '',
            type: '',
            status: false
        }
    },
    getters: {
        getCategoriesError: (state) => {
            return state.categoriesError
        }
    },
    mutations: {
        setCategoriesError: (state, data) => {
            state.categoriesError = data
        }
    },
    actions: {
    },
    modules: {}

}
export default categoriesError
