<script setup>
import { useRoundsStore } from '@/stores/rounds';

const roundsStore = useRoundsStore();

const props = defineProps(['track', 'mode']);

function backHome() {
    window.location.href = '/';
}
</script>

<template>
    <div>
        <div :class="`relative w-72 shadow-lg shadow-blue-950 rounded-xl`">
            <h3 class="py-2 text-stone-700 text-center bg-white rounded-t-xl">{{ props.track.name }}</h3>
            <iframe
            :class="`w-full h-72 rounded-b-xl`" 
            :src="`https://www.youtube.com/embed/${props.track.href}`" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
            ></iframe>
            <div class="absolute top-0 left-0 w-full h-full bg-black/5 hidden">
            </div>
        </div>
        <button
            class="mt-3 w-full py-3 bg-red-600 shadow-lg shadow-blue-950 rounded-xl hover:bg-red-500"
            @click="mode === 'vs' ? roundsStore.selectWinTrack(props.track) : backHome()"
        >
            {{mode === 'vs' ? 'Select' : 'Back to home'}}
        </button>
    </div>
</template>