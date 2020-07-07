import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    DOMask:[],
    DOMbid:[],
    pair:'BTCUSDT'
  },
  getters: {
    getPair(state){
      return state.pair;
    },
    getDomAsk(state){
      return state.DOMask;
    },
    getDomBid(state){
      return state.DOMbid;
    },

  },
  mutations: {
    setPair(state, data){
      state.pair = data;
    },
    setDomAskEmpty(state, data){
      state.DOMask = []
    },
    setDomBidEmpty(state, data){
      state.DOMbid = []
    },
    setDomAsk(state, data){
      if(state.DOMask.length > 20){
        state.DOMask.pop()        
        state.DOMask.unshift(data)
      }else{
        state.DOMask.unshift(data)
      }
    },
    setDomBid(state, data){
      if(state.DOMbid.length > 20){
        state.DOMbid.pop()        
        state.DOMbid.unshift(data)
      }else{
        state.DOMbid.unshift(data)
      }
    }
  },
  actions: {
    fetchDomInfo({ commit }, pair){
      if(pair == null){
        pair = "btcusdt"
      }
      let socket = new WebSocket(`wss://fstream.binance.com/stream?streams=${pair}@depth@500ms`)
        socket.onmessage = function(event) {

          commit("setDomBid", JSON.parse(event.data).data.b);
          commit("setDomAsk", JSON.parse(event.data).data.a);
      }
    },
  },
  modules: {
  }
})
