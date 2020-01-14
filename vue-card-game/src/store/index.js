import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardObjArr: [],
    tryCount: 0,
    prevCardObj: null
  },
  // 간단한 설정 하나 바꾸는데, 꼭 actions -> mutations 순서로 거쳐가야 하나?
  mutations: {
    addCard(state, cardObj) {
      state.cardObjArr.push(cardObj)
    },
    shuffleCards(state) {
      state.cardObjArr.sort(function(){return 0.5 - Math.random()})
    },
  },
  actions: {
    initCards(context) {
      // 예외 처리...
      if (context.state.cardObjArr.length >= 12) {
        console.log("-> context.state.cardObjArr.length >= 12 -> return")
        return 
      }
      
      var pic_ids = [
        441, 478, 249, 265, 299, 646,
        441, 478, 249, 265, 299, 646,
      ]

      var i = 0
      for (i = 0; i < pic_ids.length; i++) {
        var cardObj = {}
        cardObj["id"] = i
        cardObj["pic_id"] = pic_ids[i]
        cardObj["isCover"] = true
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
      // 점수 계산
      console.log("[store/index.js] actions: actionClick()", cardObj.pic_id, cardObj.isCover)
      
      // if(context.state.prevCardObj === null) {
      //   context.state.prevCardObj = { ...cardObj }
      // } else {
      //   if(context.state.prevCardObj.id === cardObj.id) {
      //     context.state.prevCardObj = null
      //   } else {
      //     if(context.state.prevCardObj.pic_id === cardObj.pic_id) {
      //       // make two card done
      //       context.state.prevCardObj.isDone = true
      //       cardObj.isDone = true
      //     } else {
      //       // set prev card -> null
      //       context.state.prevCardObj = null
            
      //       // two cards -> back
      //       context.state.prevCardObj.isCover = true
      //       cardObj.isCover = true

      //     }
      //   }
      // }

      context.state.tryCount++
    },
  },
})