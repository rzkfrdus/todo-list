import Vue from 'vue'
import Router from 'vue-router'
import Todo from './components/todo-list.vue'
import About from './components/about-app.vue'

Vue.use(Router)

export default new Router({
    routes : [
        {
          path: '/',
          name: 'todo-list',
          component: Todo
        },
        {
          path: '/about',
          name: 'about',
          component: About
        }
    ]
})