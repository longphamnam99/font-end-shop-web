<template>
    <header id="header" class="header">
        <div class="main-header d-flex align-items-center flex-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-xl-2 col-8 d-flex align-items-center ">
                        <a id="logo" class="main-logo" href="/">
                            <img :src="Logo"  alt="Sapo logo">
                        </a>
                    </div>
                    <nav class="col-xl-10 col-4 d-flex justify-space-beetwen">
                        <ul class="main-menu d-none d-xl-flex align-items-center menu">
                            <li class="has-child">
                                <a href="">
                                    website
                                    <i class="fa fa-angle-down"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from "#/logo.svg";

export default {
    data: () => {
        return {
            Logo: Logo
        }
    }
}
</script>