<template>
    <div class="container">
        <div class="card-item">
            <img class="main-img" src="@/static/image/iphone-17-finish-unselect-gallery-3-202509.webp" alt="">
            <div class="info-item">
                <div class="detail-item">
                    <div style="font-size: 28px;">iPhone 17</div>
                    <div>￥5999 起</div>
                </div>
                <div>了解更多 →</div>
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
        width: 480px;
        height: 600px;
        background-color: #fff;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

        /* 过渡动画 */
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;

        &:hover {
            /* 上浮 + 放大 */
            transform: translateY(-8px) scale(1.02);
            
            /* 阴影加深 */
            box-shadow: 
                0 20px 40px rgba(30, 60, 114, 0.15),
                0 8px 16px rgba(30, 60, 114, 0.1);
            
            /* 背景微亮 */
            background: #fafbff;
        }

        .main-img{
            width: 100%;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }

        .info-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;

            .detail-item {
                flex: 1;
                font-size: 20px;
                font-weight: 500;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 10px;
            }
        }
    }
}
</style>