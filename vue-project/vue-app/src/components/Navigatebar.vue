<template>
    <div id="app-nav">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="https://v4.bootcss.com" target="_blank">Bootstrap</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link :to="{name: 'homeLink'}" tag="div">
                            <a class="nav-link">首 页 <span class="sr-only">(current)</span></a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="aboutLink" tag="div">
                            <a class="nav-link">关 于</a>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        图书馆
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link :to="{name: 'resourceLink'}" tag="div">
                                <a class="dropdown-item">资 料</a>
                            </router-link>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li> -->
                </ul>
                <ul class="navbar-nav pull-right">
                    <li class="nav-item">
                        <router-link :to="{name: 'loginLink'}" tag="div">
                            <a class="nav-link">登 录 <span class="sr-only">(current)</span></a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'registLink'}" tag="div">
                            <a class="nav-link">注 册 <span class="sr-only">(current)</span></a>
                        </router-link>
                    </li>
                </ul>
                <!-- <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> -->
            </div>
        </nav>
        <br>
    </div>
</template>
<script>
export default {
    name: 'appNav',
    data () {
        return {
            aboutLink: '/about'
        }
    }
}
</script>

