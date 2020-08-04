import Vue from 'vue';
import VueRouter from 'vue-router';

import MenuPrincipal from '../components/MenuPrincipal';  // asumiendo que hicimos este componente
import Login from '../components/Login';
import Restaurant from '../components/Restaurant';
import Category from '../components/Category';
import NoEncontrada from '../components/NoEncontrada';

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: MenuPrincipal
        },
        {
            path: '/login', 
            component: Login
        },
        {
            path: '/:placeName', 
            component: Restaurant
        },
        {
            path: '/category/:catName', 
            component: Category
        },
        {
            path: '*',
            component: NoEncontrada     // Asumiendo que hemos construido un componente NoEncontrada
        }
    ]
})
