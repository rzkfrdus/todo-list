<template>
  <div id="app">
    <todo-list />
  </div>
</template>

<script>
import TodoList from './components/todo-list.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: aliceblue;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}

body, html {
  margin: 0;
  height: 100%;
}

#app {
  width: 50%;
}
</style>
