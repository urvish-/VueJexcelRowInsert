import { make } from "vuex-pathify";

const state = {
  visual: {
    colours: {
      colourForeground: "#f5f9c1",
      colourBackground: "blue",
      colourPairs: {
        1: ["#001700", "#ef2b63"],
        2: ["#fffbba", "#1a8116"],
        3: ["#2e2a93", "#f180c2"],
        4: ["#fb992c", "#3b3492"],
        5: ["#e7dfff", "#0a4ff7"],
        6: ["#400000", "#8f8603"],
        7: ["#fffffa", "#8a6d8a"],
        8: ["#004c00", "#9dbf2b"],
        9: ["#520027", "#b2890c"],
        10: ["#f4fbff", "#577a64"],
        11: ["#54476a", "#e4ffaf"],
        12: ["#84625C", "#FCF2E6"],
        13: ["#293043", "#B9C0C8"],
        14: ["#5b6100", "#2af4ad"],
        15: ["#ffd27c", "#8718e1"],
        16: ["#af9032", "#302b13"]
      }
    }
  }
};

// import rootState from "@/store/store";

const getters = {
  ...make.getters(state) // vuex-pathify
};

const mutations = {
  ...make.mutations(state) // vuex-pathify
};

const actions = {
  ...make.actions(state) // vuex-pathify
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
