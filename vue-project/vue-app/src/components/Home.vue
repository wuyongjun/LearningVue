<template>
    <div class="home">
        <!-- <h1 v-text="title"></h1>
        <users :users = "users" :style="{'font-size': size + 'px',}" @enlarge-font="upFont($event)"
            @ensmall-font="downFont($event)"></users> -->
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
import users from "./Users";

export default {
    name: 'home',
    data () {
        return {
            // users: [{ id: 1, name: '刘强东', mail: 'jiongdong@126.com'},
            //     { id: 2, name: '刘强东', mail: 'jiongdong@126.com'},
            //     { id: 3, name: '刘强东', mail: 'jiongdong@126.com'},
            //     { id: 4, name: '刘强东', mail: 'jiongdong@126.com'},
            //     { id: 5, name: '刘强东', mail: 'jiongdong@126.com'},
            //     { id: 6, name: '刘强东', mail: 'jiongdong@126.com'},
            //     { id: 7, name: '刘强东', mail: 'jiongdong@126.com'},
            //     { id: 8, name: '刘强东', mail: 'jiongdong@126.com'},
            //     { id: 9, name: '刘强东', mail: 'jiongdong@126.com'},
            //     { id: 10, name: '刘强东', mail: 'jiongdong@126.com'}]
            users: [],
            title: '这是一份名单',
            size: 10,
            msg: 'wecome to home'
        }
    },
    components: {
        users
    },
    created () {
        this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data);
                this.users = res.data;
            }, err => {

            });
    },
    methods: {
        upFont: function (size) {
            console.log(size);
            this.size += parseInt(size);
        },
        downFont: function (size) {
            this.size -= parseInt(size);
        }
    }
}
</script>
<style scoped>
    home {
        padding:20px;
        padding-right: 20px;
    }
</style>


