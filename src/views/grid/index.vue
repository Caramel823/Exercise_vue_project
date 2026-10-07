<template>
    <div class="layout">
        1
        <div class="header"></div>
        <div class="sidebar"></div>
        <div class="main"></div>
        <div class="footer"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.layout {
    display: grid;
    grid-template-areas: 
        "header header"
        "sidebar main"
        "footer footer";
    grid-template-columns: 200px 1fr;
    grid-template-rows: 60px 1fr 50px;
    height: 100vh;

    .header {
        grid-area: header;
        background-color: #f5f5f5;
    }
    .sidebar {
        grid-area: sidebar;
        background-color: #e0e0e0;
    }
    .main {
        grid-area: main;
        background-color: #ffffff;
    }
    .footer {
        grid-area: footer;
        background-color: #f5f5f5;
    }
}
</style>