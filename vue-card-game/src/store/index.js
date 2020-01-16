import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardObjArr: [],
    tryCount: 0,
  },
  // 간단한 설정 하나 바꾸는데, 꼭 actions -> mutations 순서로 거쳐가야 하나?
  mutations: {
    init(state) {
      self.cardObjArr = []
      self.tryCount = 0
    },
    addCard(state, cardObj) {
      state.cardObjArr.push(cardObj)
    },
    shuffleCards(state) {
      state.cardObjArr.sort(function(){return 0.5 - Math.random()})
    },
  },
  actions: {
    initCards(context) {
      context.commit('init')

      // 예외 처리...
      if (context.state.cardObjArr.length >= 12) {
        console.log("-> context.state.cardObjArr.length >= 12 -> return")
        return 
      }
      
      var pic_ids = []
      for( var i = 0; i < 6; i++) {
        var max = 1000, min = 1
        var num = Math.floor(Math.random() * (max - min + 1) + min)
        pic_ids.push(num)
        pic_ids.push(num)
      }

      var i = 0
      for (i = 0; i < pic_ids.length; i++) {
        var cardObj = {}
        cardObj["id"] = i
        cardObj["pic_id"] = pic_ids[i]
        cardObj["isCover"] = false
        cardObj["isDone"] = false

        context.commit('addCard', cardObj)
      }
    },
    shuffleCards(context) {
      console.log("[store/index.js] actions: shuffleCards()")
      if (context.state.cardObjArr.length > 0) {
        context.commit('shuffleCards')
      }
    },
    actionClick(context, cardObj) {
      context.state.tryCount++
    },
  }
})