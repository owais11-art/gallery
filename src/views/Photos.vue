<script setup>
    import { ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { usePexelPhotoStore } from '../store/usePexelPhotoStore'
    import { useScrollEvent } from '../composables/useScrollEvent'

    const store = usePexelPhotoStore()
    const router = useRouter()
    const route = useRoute()
    const photosElement = ref()
    store.updatePhotos() // initial search for photos
    useScrollEvent(photosElement, route.path) // used for infinite scrolling
    const handleClick = id => {
        router.push({name: 'Single-Photo', params: {id}})
    }
</script>

<template>
    <div class="photos" v-if="store.photos.length" ref="photosElement">
        <div 
            v-for="photo in store.photos"
            :class="['photo', {vertical: photo.height > photo.width, horizontal: photo.width > photo.height}]"
            :key="photo.id"
            :id="photo.id"
            @click="() => handleClick(photo.id)"
        >
            <img :src="photo.src.medium" :alt="photo.alt">
        </div>
    </div>
    <RouterView/>
</template>

<style scoped lang="less">
    .photos{
        width: 95%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        gap: 5px;
        grid-auto-flow: dense;
        .photo{
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