import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      {id:1, name:"lsw", email:"lsw@lalla.com", password:"12345"},
      {id:2, name:"lalla", email:"lalla@lalla.com", password:"12345"}
    ],
    isLogin: false,
    isLoginError: false, 
  },
  mutations: {
    loginSuccess(state) {
      state.isLogin = true
      state.isLoginError = false 
      console.log("loginSuccess")
    },
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true 
      console.log("loginError")
    }
  },
  actions: {
    login (context, loginObj) {
      let selectedUser = null
      context.state.allUsers.forEach(user => {
        if(user.email === loginObj.email) selectedUser = user
      })

      if(selectedUser === null) {
        context.commit("loginError")
      } else {
        if(selectedUser.password !== loginObj.password) {
          context.commit("loginError")
        } else {
          context.commit("loginSuccess")
        }
      }
    }
  },
  modules: {}
});
