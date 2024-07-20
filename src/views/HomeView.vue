<script setup>
import data from "../data.json";

console.log(data.tracks.slice(0, 5));

const albums = ['adventure', 'forces', 'r', 'runners', 'cd'];

</script>

<template>
	<p class="mx-16 text-center text-xl">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur recusandae maiores deleniti eius dignissimos quisquam, magnam quibusdam. Cupiditate recusandae ducimus provident alias.
	</p>

	<RouterLink to="/vs" class="self-center px-8 py-2 text-2xl bg-red-600 rounded-lg shadow-lg shadow-blue-950">
		Comenzar
	</RouterLink>

	<ul class="grow py-12 flex gap-x-8 justify-center bg-white">
		<li v-for="album in albums" :key="`album-${album}`">
			<img 
			class="w-48 h-48 rounded-xl shadow-lg shadow-blue-950"
			:src="`./src/assets/imgs/albums/${album}.jpg`" 
			:alt="`sonic ${album} album`"
			>
		</li>
	</ul>
</template>