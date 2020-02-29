const state = () => ({})

const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },
    loggedInUser(state) {
        return state.auth.user
    }
}

const mutations = {}

const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}
