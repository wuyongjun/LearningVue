<template>
    <div id="production">
        <div class="card">
            <h5 class="card-header" v-text="title"></h5>
            <div class="card-body">
                <h5 class="card-title">{{id}}</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'appProduction',
    props: ['id'],
    data () {
        return {
            title: `产品${JSON.stringify(this.$route.params)}`
        }
    }
}
</script>
