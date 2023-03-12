<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router'
    import { usePexelVideoStore } from '../store/usePexelVideoStore'

    const route = useRoute()
    const store = usePexelVideoStore()
    const video = ref(store.videos.find(video => video.id === parseInt(route.params.id)))
</script>

<template>
    <div class="single-video" v-if="video">
        <div class="info">
            Videographer: <a :href="video.user.url" target="_blank">{{ video.user.name }}</a>
        </div>
        <div class="video">
            <video :key="video.video_files[1].link" controls>
                <source :src="video.video_files[1].link" :type="video.video_files[0].file_type">
            </video>
        </div>
    </div>
</template>

<style scoped lang="less">
    .single-video{
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100%;
        background: rgba( 0, 0, 0, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 17px );
        -webkit-backdrop-filter: blur( 17px );
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        .video{
            height: 80vh;
            video{
                width: 100%;
                height: 100%;
            }
        }
        .info{
            width: 90%;
            color: antiquewhite;
            text-align: center;
            font-weight: 700;
            a{
                color: #fff; 
                font-weight: 400;
            }
        }
    }
</style>