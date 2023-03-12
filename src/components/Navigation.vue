<script setup>
</script>

<template>
    <nav>
        <div class='nav-item'>
            <RouterLink :to="{name: 'Photos'}" active-class="active">Photos</RouterLink>
        </div>
        <div class='nav-item'>
            <RouterLink :to="{name: 'Curated'}" active-class="active">Curated</RouterLink>
        </div>
        <div class='nav-item'>
            <RouterLink :to="{name: 'Videos'}" active-class="active">Videos</RouterLink>
        </div>
    </nav>
</template>

<style scoped lang="less">
    nav{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 10px 0;
        .nav-item{
            a{
                color: black;
                font-weight: 700;
                text-decoration: none;
                display: block;
                padding: 5px 10px;
                border: 1px solid black;
                cursor: pointer;
                &.active{
                    background-color: antiquewhite;
                }
            }
        }
    }
</style>