<script setup>
    import { ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { usePexelCuratedStore } from '../store/usePexelCuratedStore'
    import { useScrollEvent } from '../composables/useScrollEvent'

    const store = usePexelCuratedStore()
    const route = useRoute()
    const router = useRouter()
    const curatedElement = ref()
    store.updateCurated() // initial search for curated photos
    useScrollEvent(curatedElement, route.path) // used for infinite scrolling
    const handleClick = id => {
        router.push({name: 'Single-Curated', params: {id}})
    }
</script>

<template>
    <div class="curated-photos" v-if="store.curated.length" ref="curatedElement">
        <div 
            v-for="photo in store.curated"
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
    .curated-photos{
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