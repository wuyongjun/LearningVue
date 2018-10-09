import Home from './components/Home'
import About from './components/About'
import HelloWorld from './components/HelloWorld'
import Order from './components/Order'
import Company from './components/about/Company'
import Contact from './components/about/Contact'
import Production from './components/about/Production'
import Login from './components/Login'
import Regist from './components/Regist'

export const routers =  [{
        path: '/', name: 'homeLink', component: Home, alias: '/time'
    }, {
        path: '/about', name: 'aboutLink', redirect: '/about/company', component: About, 
            children: [{
                    path: '/about/company', name: 'companyLink', component: Company
                }, {
                    path: '/production/:id', name: 'productionLink', component: Production, props: true
                }, {
                    path: '/contact/:name', name: 'contactLink', component: Contact
                }]
    }, {
        path: '/order', name: 'orderLink', component: Order
    }, {
        path: '/helloWorld', name: 'resourceLink', component: HelloWorld
    }, {
        path: '/login', name: 'loginLink', component: Login
    }, {
        path: '/regist', name: 'registLink', component: Regist
    }, {
        path: '*', redirect: '/'
    }]