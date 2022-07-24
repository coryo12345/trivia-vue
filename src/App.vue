<template>
  <div class="container">
    <router-view />
  </div>
  <a-layout-footer class="footer">
    Trivia Questions Powered By:
    <strong
      ><a href="https://the-trivia-api.com/" target="_blank"
        >The Trivia API</a
      ></strong
    >
  </a-layout-footer>
</template>

<style lang="scss">
@import "assets/helper.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background: #e0eaf2;
}
</style>

<style scoped>
.footer {
  text-align: center;
  width: 100vw;
  position: absolute;
  bottom: 0;
  padding: 4px;
}

.container {
  padding-top: 60px;
  position: absolute;
  top: 0;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
}
</style>
