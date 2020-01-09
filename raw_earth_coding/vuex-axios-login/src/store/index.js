import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      {id:1, name:"lsw", email:"lsw@lalla.com", password:"12345"},
      {id:2, name:"lalla", email:"lalla@lalla.com", password:"12345"}
    ],
    isLogin: false,
    isLoginError: false, 
  },
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false 
      state.userInfo = payload
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
      axios.post('https://reqres.in/api/login', {
          "email": loginObj.email,
          "password": loginObj.password
        })
        .then(res => {
          console.log(res)
          let token = res.data.token
          
          localStorage.setItem("access_token", token)
          
          context.dispatch('getMemberInfo')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMemberInfo(context) {
      let token = localStorage.getItem("access_token")

      let params = {
        "access-token": token
      }

      axios.get('https://reqres.in/api/users/2', params)
        .then(response => {
          console.log(response)
          let userInfo = {
            "id": response.data.data.id,
            "email": response.data.data.email,
            "first_name": response.data.data.first_name,
            "last_name": response.data.data.last_name,
            "avatar": response.data.data.avatar
          }
          context.commit('loginSuccess', userInfo)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {}
});
