import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router';
import * as firebase from "firebase";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

var gProvider = new firebase.auth.GoogleAuthProvider();
var fProvider = new firebase.auth.FacebookAuthProvider();

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    showNav : true,
    cUser : null,
    isAuth : null,

  },
  mutations: {
    setIsAuthenticated(state, payload) {
      state.isAuth = payload;
  },
  setUser(state, payload) {
    state.cUser = payload;
},
  },
  actions: {
    loginGoogle({
      commit
  }) {
      firebase.auth().signInWithPopup(gProvider).then(async user => {
        fetch(`https://fitdotyou.herokuapp.com/users?uid=${user.user.uid}&name=${user.user.displayName}&email=${user.user.email}`).then(response => response.json()).then(data => console.log(data));
        // axios
        // .get(`https://fitdotyou.herokuapp.com/users?uid=${user.user.uid}&name=${user.user.displayName}&email=${user.user.email}`)
        // .then(response => {console.log(response)
        // })
        commit('setUser', user.user);
              commit('setIsAuthenticated', true);
              console.log(user);
              
      }).catch((error) => {
        
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          console.log(error)
      });
  },


  loginFacebook({
      commit
  }) {
    firebase.auth().signInWithPopup(fProvider).then(async user => {
      // axios
      // .get(`https://fitdotyou.herokuapp.com/users?uid=${user.user.uid}&name=${user.user.displayName}&email=${user.user.email}`)
      // .then(response => {console.log(response)
      // })
      fetch(`https://fitdotyou.herokuapp.com/users?uid=${user.user.uid}&name=${user.user.displayName}&email=${user.user.email}`).then(response => response.json()).then(data => console.log(data));

      commit('setUser', user.user);
      commit('setIsAuthenticated', true);
      console.log(user);
}).catch((error) => {
  commit('setUser', null);
  commit('setIsAuthenticated', false);
  console.log(error.messge)

});
  },
  logout({
    commit
}) {
    firebase
        .auth()
        .signOut()
        .then(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            
        })
        .catch(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);

        });

  },
}
  })
