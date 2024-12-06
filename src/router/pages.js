import TodoApp from '../views/TodoApp.vue';
import QuizApp from '../views/QuizApp.vue';

export const pages = [
  {
    path: '/',
    name: 'todoapp',
    label: 'To Do App',
    component: TodoApp
  },
  {
    path: '/quiz',
    name: 'quizapp',
    label: 'Quiz App',
    component: QuizApp
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   label: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // }
];