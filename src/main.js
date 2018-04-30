import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Feather from 'vue-icon';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Feather, 'v-icon');

import DB from './db';
import randomDB from './random-db';

import auth from './auth';
import App from './components/App.vue';
import Ads from './components/Ads.vue';
import Ad from './components/Ad.vue';
import Login from './components/Login.vue';
import Navbar from './components/Navbar.vue';
import Edit from './components/Edit.vue';

Vue.component('component-navbar', Navbar);
Vue.component('component-login', Login);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Ads
        },
        {
            path: '/edit',
            component: Edit,
            beforeEnter: (to, from, next) => {
                if (!auth.loggedIn()) {
                    next({
                        path: '/login',
                        query: {redirect: to.fullPath}
                    });
                } else {
                    next();
                }
            }
        },
        {
            path: '/edit/:id',
            component: Edit,
            name: 'edit',
            beforeEnter: (to, from, next) => {
                if (!auth.loggedIn()) {
                    next({
                        path: '/login',
                        query: {redirect: to.fullPath}
                    });
                } else {
                    next();
                }
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/logout',
            beforeEnter: (to, from, next) => {
                auth.logout();
                next('/');
            }
        },
        {
            path: '/delete/:id',
            name: 'delete',
            beforeEnter: (to, from, next) => {
                if (to.params && to.params.id) {
                    DB.drop('ads', {id: +to.params.id});
                }
                next('/');
            }
        },
        {
            path: '/init-demo',
            beforeEnter: (to, from, next) => {
                auth.logout();
                DB.use(randomDB).initForDemo(true);
                next('/');
                window.setTimeout(() => {
                    window.location.reload();
                }, 1);
            }
        },
        {
            path: '/:id',
            name: 'ad',
            component: Ad,
            beforeEnter: (to, from, next) => {
                if (/^[0-9]+$/.test(to.params.id) && Number.isInteger(+to.params.id)) {
                    next();
                } else {
                    next('/');
                }
            }
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
