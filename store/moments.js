export const state = () => ({
  moments: []
});

export const getters = {
  moments: state => state.moments
};

export const mutations = {
  storeMoments(state, moments) {
    state.moments = moments;
  }
};

export const actions = {
  async fetchMoments({ state, commit }) {
    await this.$axios.get(`/moments?_limit=10`).then(response => {
      commit("storeMoments", response.data);
    });
    return state.moments;
  }
};
