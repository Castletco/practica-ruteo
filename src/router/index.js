import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import MenuPrincipal from '../components/MenuPrincipal';  // asumiendo que hicimos este componente
import Login from '../components/Login';
//import Restaurant from '../components/Restaurant';
import Category from '../components/Category';
import NoEncontrada from '../components/NoEncontrada';
import AcercaDe from '../components/AcercaDe';
import Revisiones from '../components/Revisiones';
import Imagenes from '../components/Imagenes';

Vue.use(VueRouter);    // instalamos explícitamente el router

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

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
            component: AcercaDe
        },
        {
            path: '/:placeName/reviews', 
            component: Revisiones
        },
        {
            path: '/:placeName/images', 
            component: Imagenes
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
