<script setup>
import frontPageButton from '../components/frontPageButton.vue';
import navbar from '../components/navbar.vue';
</script>

<template>

    	<div class="text-center">
    	    <h1>Forsiden</h1>
    	</div>
		
        <div class="d-flex flex-column gap-3">
            <frontPageButton  text="Tilføj" link="/add" />
            <frontPageButton  text="Dine retter" link="/yourCategories" />
            <frontPageButton  text="Indstillinger" link="/settings" />
        </div>

        <div>
            <navbar />
        </div>

</template>
