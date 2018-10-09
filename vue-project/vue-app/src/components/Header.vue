<template>
    <div>
        <!-- <ul class="menu">
            <li :class="{ bg_li: bgHomeLi }"
                @mouseover="mOver('home')" @mouseout="mOut('home')"><router-link to="/">首 页</router-link></li>
            <li :class="{ bg_li: bgAboutLi }"
                @mouseover="mOver('about')" @mouseout="mOut('about')"><router-link to="/about">关 于</router-link></li>
            <li :class="{ bg_li: bgHwLi }"
                @mouseover="mOver('hw')" @mouseout="mOut('hw')"><router-link to="/helloWorld">资 料</router-link></li>
        </ul> -->
        <app-nav></app-nav>
    </div>
</template>
<script>
import appNav from './Navigatebar'

export default {
    name: 'appHeader',
    data () {
        return {
            // bgHomeLi: false,
            // bgAboutLi: false,
            // bgHwLi: false
        }
    },
    watch: { // 此处犯了错误，将watch写成了function，谨记watch为对象 *************this.$route routes************
        '$route' (to, from) {
            console.log(to, from);
            // if (from.path === '/') {
            //     this.bgHomeLi = false;
            // } else if (from.path === '/about') {
            //     this.bgAboutLi = false;
            // } else {
            //     this.bgHwLi = false;
            // }
        }
    },
    methods: {
        mOver: function (menuLi) {
            switch (menuLi) {
                case 'home':
                    this.bgHomeLi = true;
                break;
                case 'about':
                    this.bgAboutLi = true;
                break;
                case 'hw':
                    this.bgHwLi = true;
                break;
                default:
                break;
            }
        },
        mOut: function (menuLi) {
            let currPath = this.$route.path;
            if (menuLi === 'home' && currPath !== '/') {
                this.bgHomeLi = false;
            } else if (menuLi === 'about' && currPath !== '/about') {
                this.bgAboutLi = false;
            } else if (menuLi === 'hw' && currPath !== '/helloWorld') {
                this.bgHwLi = false;
            }

        }
    },
    created () {
        // let currPath = this.$route.path;
        // if (currPath === '/') {
        //     this.bgHomeLi = true;
        // } else if (currPath === '/about') {
        //     this.bgAboutLi = true;
        // } else {
        //     this.bgHwLi = true;
        // }
    },
    components: {
        'app-nav': appNav
    }
}
</script>
<style scoped>
    /* .menu {
        display: flex;
        height: 50px;
        background: rgb(231, 255, 224);
        border: 1px solid black;
        justify-content: flex-start;
        align-items: center;
        }
    .menu li {
        list-style: none;
        padding: 14px;
    }
    .menu li a {
        text-decoration-line: none;
        font-weight: bold;
        color: black;
    }
    .bg_li {
        background: gainsboro;
    } */
</style>


