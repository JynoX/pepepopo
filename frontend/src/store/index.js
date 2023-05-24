import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: "",
      token: ""
    }
  },
  mutations: {
    // payload: {user: {}, token: ""}
    setToken(state, payload){
        state.user = payload.user
        state.token = payload.token

        // controllare se flag rimani loggato
        // se rimani loggato => localstorage
    },
    }, 
    getters: {
        getToken: state => {
            return state.token
        },
        getUser: state => {
            return state.user
        }
    }
})

export default store