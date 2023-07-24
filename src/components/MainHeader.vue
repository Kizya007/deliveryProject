<template>
    <header>
        <img src="@/assets/efood.png" alt="">
        <ul class="navigation">
            <a href="">
                <li>Home</li>
            </a>
            <a href="">
                <li>Service</li>
            </a>
            <a href="">
                <li>Top cities</li>
            </a>
            <a href="">
                <li>Contract</li>
            </a>
            <li>
                <SearchIcon />
            </li>
            <li>
                <BasketIcon />
            </li>
            <a href="">
                <li>
                    Sign Up
                </li>
            </a>
        </ul>
    </header>
</template>


<style lang="scss" scoped >
    .navigation {
        display: flex;
    }
</style>

<script>
import SearchIcon from '@/assets/icon/SearchIcon.vue';
import BasketIcon from '@/assets/icon/BasketIcon.vue';

export default {
    name: 'MainHeader',

    components: {
        SearchIcon,
        BasketIcon
    }
}
</script>