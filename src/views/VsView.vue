<script setup>
import { useRoundsStore } from "@/stores/rounds";
import TrackComponent from "@/components/TrackComponent.vue";

const roundsStore = useRoundsStore();
</script>

<template>
    <div v-if="roundsStore.loadingRound" class="grow flex flex-col justify-center items-center">
        <img src="../assets/extras/sonic-waiting.gif" alt="Sonic waiting GIF" class="w-40">
        <p class="text-3xl -translate-y-6">Loading round...</p>
    </div>
    <template v-else>
        <h2 class="text-center text-3xl">Choose the best!</h2>
    
        <div class="w-full flex justify-center m-0">
            <div class="m-0 w-fit px-5 py-1 bg-stone-900">
                <p v-if="roundsStore.roundsLength > 1">
                    Round {{ roundsStore.roundNumber }} - <span class="text-amber-400">{{ roundsStore.vsNumber }}</span> / {{ roundsStore.roundsLength }}
                </p>
                <p v-else>
                    Final Round
                </p>
            </div>
        </div>

        <div class="w-full flex gap-x-10 justify-center items-center">
            <TrackComponent :track="roundsStore.currentRound[0]" mode="vs" />
            <span class="text-4xl">{{ "</>" }}</span>
            <TrackComponent :track="roundsStore.currentRound[1]" mode="vs" />
        </div>
    </template>
</template>