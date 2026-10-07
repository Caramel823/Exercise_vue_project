<template>
    <h3>手写Throttle节流</h3>
    <p>通过改变窗口大小，来测试节流效果</p>
</template>

<script setup lang="ts">
import throttle from './utils.ts'

const handleResize = throttle(function () {
    console.log('节流触发')
}, 1000)

onMounted(() => {
    window.addEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">

</style>