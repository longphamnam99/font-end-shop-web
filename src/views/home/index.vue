<template>
    <Slideshow />
    <Category />
    <Outstanding />
</template>

<script>
import Slideshow from "./slideshow";
import Category from "./category";
import Outstanding from "./outstanding";

export default {
    components: {
        Slideshow,
        Category,
        Outstanding,
    }
}
</script>