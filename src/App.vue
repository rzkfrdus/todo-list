<template>
  <div id="app">
    <header-app />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/todolist">Todo</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <footer-app />
  </div>
</template>

<script>
import Todo from "./components/todo-lists.vue";
import headerApp from "./components/header-app.vue";
import FooterApp from './components/footer-app.vue'

export default {
  name: "app",
  components: {
    headerApp,
    FooterApp,
    // eslint-disable-next-line vue/no-unused-components
    Todo,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body,
html {
  margin: 0;
  height: 100%;
}
#app {
  width: 50%;
}
nav {
  padding: 20px 20px 20px 0;
}
nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: darkseagreen;
  font-weight: bold;
  margin-right: 15px;
}
</style>