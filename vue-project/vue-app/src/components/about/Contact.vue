<template>
    <div id="contact">
        <div class="card">
            <h5 class="card-header" v-text="title"></h5>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'appContact',
    data () {
        return {
            title: `联系方式${JSON.stringify(this.$route.query)}`
        }
    }
}
</script>

