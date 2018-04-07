<style rel="styleesheet" lang="scss">
</style>

<template>
    <article>
        嵌套路由父组件
        <router-link to="/goods_child/title">显示商品标题</router-link>
        <router-link to="/goods_child/images">显示商品图片</router-link>
        <router-view></router-view>
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
