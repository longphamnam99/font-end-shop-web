<template>
    <div class="row">
        <router-link :to="to" class="btn btn-lsv" @click.prevent="abc">
            <template v-if="icon">
                <div class="btn-icon">
                    <img :src="icon" :alt="icon">
                </div>
            </template>
            <slot>
                <!-- for icon -->
            </slot>
            <span class="ms-2">{{ title }}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "button-lsv",
    props: {
        title: {
            type: String,
            default: "Button",
        },
        icon: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "/"
        },
    },
    methods: {
        abc() {
            console.log(1)
        },
        toPage(to) {
            console.log(to)
        }
    }
}
</script>

<style lang="scss" scoped>
$size-icon: 25px;

.btn-lsv {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 25px;
    line-height: 46px;
    height: 46px;
    border: none;
    border-radius: 50px;
    color: #fff !important;
    font-weight: $font-weight;
    background-image: linear-gradient(90deg, #6bd490 0%, #3bd16b 49%, #5eba4d 100%);

    .btn-icon {
        display: flex;
        width: $size-icon;
        height: $size-icon;

        img {
            width: 100%;
            height: 100%;
        }
    }

    &:hover {
        background: $background;
        transition: background-image 0.3s ease;
    }
}
</style>