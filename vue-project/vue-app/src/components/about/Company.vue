<template>
    <div id="company">
        <div class="card">
            <h5 class="card-header" v-text="title"></h5>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    name: 'appCompany',
    data () {
        return {
            title: `公司介绍${JSON.stringify(this.$route.params)}--
                ${JSON.stringify(this.$route.query)}`
        }
    },
    beforeRouteEnter (to, from, next) {
        // 拿不到this实例，因为此时还没有被创建
        console.log(to, from);
        console.log(this);
        next(vm => console.log(vm));
    },
    beforeRouteUpdated (to, from, next) {
        // 只有复用同一组件仅参数变化的时候，钩子会被调用，如/user/1 ==> /user/2
        console.log('beforeRouteUpdated', to, from);
    },
    beforeRouteLeave (to, from, next) {
        console.log('beforeRouteLeave', to, from);
        next();
    }
}
</script>

