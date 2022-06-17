<template>
  <div id="wrapper-helloworld">
    <span :style="{'background-color':background, 'color': color}">HelloWorld component</span>
    <br>
    <input type="text" v-model="background" autofocus>
  </div>
</template>

<script>
import { get, set, sync, clone, call } from "vuex-pathify";
export default {
  name: "HelloWorld",
  computed: {
    background: sync("extra/visual@colours.colourBackground"),
    color: get("extra/visual.colours.colourForeground")
  }
};
</script>

<style scoped>
#wrapper-helloworld {
  color: blue;
}

span {
  padding: 0.3em;
}

input {
  padding: 0;
  margin-top: 0.5em;
  text-align: center;
}
</style>
