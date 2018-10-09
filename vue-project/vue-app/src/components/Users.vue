<template>
    <div class="users">
        <input type="text" v-model="size">
        <button @click="enlargeFont">放大名单</button>
        <button @click="ensmallFont">缩小名单</button>
        <ul>
            <li v-for="user in users" :key="user.id">
                <h3 v-text="user.name"></h3>
                <p v-text="user.email"></p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'users',
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            size: 0
        }
    },
    methods: {
        enlargeFont: function () {
            // 调用vue实例对象方法$emit
            this.$emit('enlarge-font', this.size);
        },
        ensmallFont: function () {
            this.$emit('ensmall-font', this.size);
        }
    }
}
</script>
<style scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    ul li {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border: 2px solid;
        padding: 20px;
        margin: 10px;;
    }
</style>


