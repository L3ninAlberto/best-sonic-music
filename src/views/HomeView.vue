<template>
	<p class="mt-5 mx-16 text-center text-xl">
		Sonic the Hedgehog has awesome music! Happy, epic, inspiring and emotional... Can you decide which one is the best?
	</p>

	<RouterLink to="/vs" class="self-center px-14 py-2 text-2xl bg-red-600 rounded-lg shadow-lg shadow-blue-950 hover:bg-red-500">
		Start
	</RouterLink>

	<ul class="grow mt-5 py-12 flex gap-x-8 justify-center bg-white">
		<li v-for="album in ['adventure', 'forces', 'r', 'runners', 'cd']" :key="`album-${album}`">
			<img 
			class="w-48 h-48 rounded-xl shadow-lg shadow-blue-950"
			:src="`./src/assets/imgs/albums/${album}.jpg`" 
			:alt="`sonic ${album} album`"
			>
		</li>
	</ul>
</template>