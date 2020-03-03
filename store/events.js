import moment from "moment/moment";

export const state = () => ({
  events: []
});

export const getters = {
  getEvents: state => state.events,
  getEventsForDate: state => {
    date => {
      return state.events.find(event => {
        event.id === date;
      });
    };
  },
  getItemById: state => {
    id => {
      return state.items.find(item => item.id === id);
    };
  }
};

export const mutations = {
  storeEvents(state, events) {
    state.events = events;
  }
};

export const actions = {
  async fetchEvents({ state, commit }) {
    const date = moment()
      .subtract(2, "days")
      .format("YYYY-MM-DD");
    await this.$axios.get(`/events?date_gte=${date}`).then(response => {
      commit("storeEvents", response.data);
    });
    return state.events;
  }
};
