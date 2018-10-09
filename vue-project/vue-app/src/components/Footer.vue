<template>
    <footer>
        <p v-text="content"></p>
    </footer>
</template>
<script>
export default {
    name: 'appFooter',
    data () {
        return {
            content: '@this is a footer'
        }
    }
}
</script>
<style scoped>
footer {
    height: 40px;
    background: black;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
}
</style>
