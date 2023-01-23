
const usersError = {
    state: {
        usersError:{
            title: '',
            desc: '',
            type: '',
            status: false
        }
    },
    getters: {
        getUsersError: (state) => {
            return state.usersError
        }
    },
    mutations: {
        setUsersError: (state, data) => {
            state.usersError = data
        }
    },
    actions: {
    },
    modules: {}

}
export default usersError
