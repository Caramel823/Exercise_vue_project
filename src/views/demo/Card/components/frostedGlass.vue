<template>
    <div class="container">
        <div class="card-item">
            <div class="detail-item">
                <div style="font-size: 28px;">iPhone 17</div>
                <div>￥5999 起</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #edf2fa;
    display: flex;
    justify-content: center;
    align-items: center;
    .card-item {
        box-sizing: border-box;
        width: 480px;
        height: 600px;
        border-radius: 20px;
        display: flex;
        align-items: end;
        justify-content: center;
        background-image: url("@/static/image/iphone-17-finish-unselect-gallery-3-202509.webp");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 50px;

        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

        // ⭐ 卡片 hover 上浮
        &:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(30, 60, 114, 0.2);
        }

        .detail-item {
            width: 300px;
            height: 300px;
            font-size: 20px;
            font-weight: 600;
            color: #ffffff;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 20px;
            backdrop-filter: blur(12px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
    }
}
</style>