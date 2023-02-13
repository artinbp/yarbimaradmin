
const productsError = {
    state: {
        productsError:{
            title: '',
            desc: '',
            type: '',
            status: false
        }
    },
    getters: {
        getProductsError: (state) => {
            return state.productsError
        }
    },
    mutations: {
        setProductsError: (state, data) => {
            state.productsError = data
        }
    },
    actions: {
    },
    modules: {}

}
export default productsError
