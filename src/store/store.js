import Vue from "vue";
import Vuex from "vuex";
import vuexPersist from "vuex-persist";
import { localForageService } from "@/store/localforage";
import pathify from "@/store/pathify";
import { make } from "vuex-pathify";

import extra from "@/store/modules/extra";

Vue.use(Vuex);

const state = {
  a: {
    b: {
      counter: 5
    }
  },
  one: {
    two: {
      three: {
        a: {
          id: 1,
          counter: 10
        },
        b: {
          id: 2,
          counter: 11
        }
      }
    }
  }
};

const getters = {
  ...make.getters(state) // vuex-pathify
};

const mutations = {
  ...make.mutations(state) // vuex-pathify
};

const actions = {
  ...make.actions(state) // vuex-pathify
};

const modules = {
  extra
};

const vuexLocal = new vuexPersist({
  // vuex-persist
  storage: localForageService, //localForage
  asyncStorage: true,
  key: "vuexPersistStorage_default",
  supportCircular: true,
  saveState: async (key, state, storage) => {
    let data = state;

    if (storage && data) {
    }
    storage.setItem(key, data);
  },
  restoreState: async function(key, storage) {
    let data = await storage.getItem(key);
    if (await data) {
      try {
      } catch (e) {
        console.log(e);
      }
    }
    return await data;
  }
});

const plugins = [pathify.plugin, vuexLocal.plugin];

export const store = new Vuex.Store({
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins
});
