<template>
    <h3>手写Debounce防抖</h3>

    <el-button type="primary" @click="debounceClick">点击防抖</el-button>
</template>

<script setup lang="ts">
import debounce from './utils.ts'

const debounceClick = debounce(function () {
        console.log('防抖点击')
    }, 1000)
</script>

<style scoped lang="scss">

</style>