export const state = () => ({
    events: []
})

export const getters = {
    events: state => state.events
}

export const mutations = {
    storeEvents(state, events) {
        state.events = events
    }
}

export const actions = {
    async fetchEvents({ state, commit }) {
        await this.$axios.get(`/events`).then(response => {
            commit('storeEvents', response.data)
        })
        return state.events
    }
}