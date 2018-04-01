<style rel="styleesheet">
</style>

<template>
    <article>
        这是商品列表页面
        <span>{{$route.params.goodsId}}</span>
        <span>{{$route.params.name}}</span>
    </article>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {
        },
        activated() {
        },
        methods: {},
        components: {}
    }
</script>
