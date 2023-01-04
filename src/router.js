import Vue from 'vue'
import Router from 'vue-router'
import Todo from './components/todo-lists.vue'
import About from './components/about-app.vue'
import Home from './components/home-page.vue'

Vue.use(Router)

export default new Router({
    routes : [
        {
          path: '/todolist',
          name: 'todo-list',
          component: Todo
        },
        {
          path: '/',
          name: 'home-page',
          component: Home
        },
        {
          path: '/about/:nama',
          name: 'about',
          component: About
        },
        {
          path: '/about',
          name: 'about',
          component: About
        }
    ]
})