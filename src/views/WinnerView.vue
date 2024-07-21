<script setup>
import { useRoundsStore } from '@/stores/rounds';
import TrackComponent from '@/components/TrackComponent.vue';

const roundsStore = useRoundsStore();
</script>

<template>
    <h2 class="text-center text-3xl">Winner!</h2>
    <div class="flex justify-center">
        <TrackComponent :track="roundsStore.winTracks[0]" mode="winner" />
    </div>
</template>