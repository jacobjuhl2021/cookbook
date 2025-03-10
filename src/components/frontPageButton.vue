<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    text: String,
    link: String
});

const router = useRouter();

const handleClick = () => {
    router.push(props.link);
};
</script>

<template>
    <button @click="handleClick" type="button" class="btn btn-primary"> 
        {{ text }}
    </button>
</template>

<style scoped>

</style>
