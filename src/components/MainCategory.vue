<template>
    <div>
        <h1>Our popular Category </h1>
        <ul>
            <li>
                <BurgerIcon /> Burger
            </li>
            <li>
                <PizzaIcon /> Pizza
            </li>
            <li>
                <SandwichIcon /> sandwich
            </li>
            <li>
                <AsianIcon /> Asian Food
            </li>
            <li>
                <SetMenuIcon /> Set Menu
            </li>
        </ul>
    </div>
</template>

<script>
import AsianIcon from '@/assets/icon/AsianIcon.vue';
import BurgerIcon from '@/assets/icon/BurgerIcon.vue';
import PizzaIcon from '@/assets/icon/PizzaIcon.vue';
import SandwichIcon from '@/assets/icon/SandwichIcon.vue';
import SetMenuIcon from '@/assets/icon/SetMenuIcon.vue';

export default {
    name: 'MainCategory',

    components: {
        AsianIcon,
        BurgerIcon,
        PizzaIcon,
        SandwichIcon,
        SetMenuIcon
    }
}
</script>

