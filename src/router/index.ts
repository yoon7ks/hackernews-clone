import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import SingleStoryItem from '@/components/SingleStoryItem.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/story/:id',
    name: 'Story',
    component: SingleStoryItem,
    props: true,
  },
];
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
export default router;
