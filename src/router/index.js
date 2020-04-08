import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import VueSelect from '@/components/Vue-Select';
import NextTick from '../components/NextTick';
import EventModifiers from '../components/EventModifiers';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/foo',
      name: 'Foo',
      component: VueSelect,
    },
    {
      path: '/next',
      name: 'NextTick',
      component: NextTick,
    },
    {
      path: '/event',
      name: 'Event',
      component: EventModifiers,
    },
  ],
});
