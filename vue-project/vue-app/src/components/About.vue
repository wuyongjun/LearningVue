<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <!-- As a link -->
                <nav class="navbar navbar-light bg-light mb-2">
                    <router-link :to="{name: `companyLink`}" tag="div">
                        <a class="navbar-brand">公司介绍</a>
                    </router-link>
                    
                </nav>
                <!-- As a heading -->
                <nav class="navbar navbar-light bg-light mb-2">
                    <router-link :to="{name: 'productionLink', params: { id }}" tag="div">
                        <a class="navbar-brand mb-0 h1">产品信息</a>
                    </router-link>
                    
                </nav>
                <!-- As a heading -->
                <nav class="navbar navbar-light bg-light mb-2">
                    <router-link :to="{name: 'contactLink', params: { name: 'herry' }, query: { phone: '13946869277' }}" tag="div">
                        <a class="navbar-brand mb-0 h1">联系我们</a>
                    </router-link>
                    
                </nav>
            </div>
            <div class="col-md-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            id: '001',
            flag: 'xxxx'
        }
    }
}
</script>

