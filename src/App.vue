<template>
  <div id="app">
    <img width="25px" src="./assets/logo.png">
    <div id="menu-banner-links">
      <router-link to="/">Default</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link to="/helloworld">HelloWorld</router-link>
    </div>
    <div id="router-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // HelloWorld
  }
};
</script>

<style>
#app {
  margin: 1em;
}

#router-view {
  margin-top: 1em;
}
</style>
