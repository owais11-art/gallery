<script setup>
    import { computed } from '@vue/reactivity'
    import { usePexelPhotoStore } from '../store/usePexelPhotoStore'
    import Header from './Header.vue'

    const store = usePexelPhotoStore()
    const bgSrc = computed(() => `url(${store.heroBgSrc}) no-repeat center center / cover`)

</script>

<template>
    <div class="hero">
        <Header/>
        <div class="overlay"></div>
    </div>
</template>

<style scoped lang="less">
    .hero{
        width: 100%;
        height: 90vh;
        background: v-bind('bgSrc');
        position: relative;
        .overlay{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
</style>