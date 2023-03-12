<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    import searchIcon from '../assets/searchIcon.svg'
    import { useSearch } from '../composables/useSearch'

    const route = useRoute()
    const searchText = ref('')
    const handleClick = () => {
        const [ search, store ] = useSearch(route.path)
        search({
            query: searchText.value,
            per_page: store.perPage,
            page: 1
        }, true) // true specifies that we are explicitly searching for photos, curated photos or videos by using search box in header.
        searchText.value = ''
    }
</script>

<template>
    <header>
        <div class="logo">
            <h3>Gallery</h3>
        </div>
        <div class="search" v-if="route.path !== '/curated'">
            <input type="text" v-model="searchText" placeholder="Search">
            <div class="search-icon" @click="handleClick">
                <img :src="searchIcon" alt="search-icon">
            </div>
        </div>
    </header>
</template>

<style scoped lang="less">
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 15px 25px;
        z-index: 1;
        .logo{
            h3{
                color: rgba( 255, 255, 255, 0.7 );
                letter-spacing: 1.5px;
                font-size: 30px;
            }
        }
        .search{
            display: flex;
            background: rgba( 255, 255, 255, 0.25 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 5px );
            -webkit-backdrop-filter: blur( 5px );
            border-radius: 5px;
            input{
                background-color: transparent;
                border: none;
                outline: none;
                color: #fff;
                font-size: 18px;
                padding: 0 5px;
                font-weight: bold;
            }
            .search-icon{
                width: 40px;
                height: 40px;
                background: rgba( 255, 255, 255, 0.25 );
                border-radius: 0 5px 5px 0;
                cursor: pointer;
                &:hover{
                    background: rgba( 255, 0, 0, 0.25 );
                    // box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                    // backdrop-filter: blur( 5px );
                    // -webkit-backdrop-filter: blur( 5px );
                    border-radius: 0 5px 5px 0;
                }
            }
        }
    }
</style>