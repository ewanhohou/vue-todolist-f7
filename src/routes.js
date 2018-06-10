import TodoPage from './pages/todolist.vue'
import NotFoundPage from './pages/not-found.vue';



export default [{
    path: '/',
    component: TodoPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
