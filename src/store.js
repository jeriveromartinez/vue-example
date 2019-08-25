import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards: JSON.parse(localStorage.getItem('cards')) || []
    },
    mutations: {
        cards(state) {
            localStorage.setItem('cards', JSON.stringify(state.cards));
        }
    },
    actions: {
        setCard({ commit, state }, card) {
            const cards = state.cards;
            cards.push(card);
            commit('cards', cards);
        }
    },
    getters: {
        getCards(state) {
            if (!localStorage.getItem('cards')) localStorage.setItem('cards', '[]');
            return state.cards;
        }
    }
})
