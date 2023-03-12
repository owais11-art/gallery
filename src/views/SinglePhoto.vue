<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router'
    import { usePexelPhotoStore } from '../store/usePexelPhotoStore'

    const route = useRoute()
    const store = usePexelPhotoStore()
    const photo = ref(store.photos.find(photo => photo.id === parseInt(route.params.id)))
</script>

<template>
    <div class="single-photo" v-if="photo">
        <div class="info">
            Photographer: <a :href="photo.photographer_url" target="_blank">{{ photo.photographer }}</a>
        </div>
        <div class="image">
            <img :src="photo.src.original" :alt="photo.alt">
        </div>
    </div>
</template>

<style scoped lang="less">
    .single-photo{
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
        .image{
            width: 90%;
            height: 80vh;
            img{
                object-fit: contain;
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