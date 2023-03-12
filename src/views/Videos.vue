<script setup>
    import { ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { usePexelVideoStore } from '../store/usePexelVideoStore'
    import { useScrollEvent } from '../composables/useScrollEvent'

    const store = usePexelVideoStore()
    const route = useRoute()
    const router = useRouter()
    const videoElement = ref()
    store.updateVideos() // initial search for videos
    useScrollEvent(videoElement, route.path) // used for infinite scrolling
    const handleClick = id => {
        router.push({name: 'Single-Video', params: {id}})
    }
</script>

<template>
    <div class="videos" v-if="store.videos.length" ref="videoElement">
        <div 
            v-for="video in store.videos"
            :class="['video', {vertical: video.height > video.width, horizontal: video.width > video.height}]"
            :key="video.id"
            :id="video.id"
            @click="() => handleClick(video.id)"
        >
            <img :src="video.image" alt="video-image">
        </div>
    </div>
    <RouterView/>
</template>

<style scoped lang="less">
    .videos{
        width: 95%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        gap: 5px;
        grid-auto-flow: dense;
        .video{
            cursor: pointer;
            &.vertical{
                grid-row: span 2;
            }
            &.horizontal{
                grid-column: span 2;
            }
            img{
                object-fit: cover;
            }
        }
    }
</style>