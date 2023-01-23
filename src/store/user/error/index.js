
const userError = {
    state: {
        userError:{}
    },
    getters: {
        getUserError: (state) => {
            return state.userError
        }
    },
    mutations: {
        setUserError: (state, data) => {
            state.userError = data
        }
    },
    actions: {
    },
    modules: {}

}
export default userError
