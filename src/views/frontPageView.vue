<script setup>
import frontPageButton from '../components/frontPageButton.vue';
import navbar from '../components/navbar.vue';
</script>

<template>

	<div class="container">
    	<div class="text-center">
    	    <h1>Forside</h1>
    	</div>
		
        <div class="d-flex flex-column gap-3">
            <frontPageButton class="w-100" text="Tilføj" link="/add" />
            <frontPageButton class="w-100" text="Dine retter" link="/yourCategories" />
            <frontPageButton class="w-100" text="Indstillinger" link="/settings" />
        </div>
	</div>
</template>
