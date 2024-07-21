import { ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import data from "../data.json";

export const useRoundsStore = defineStore('rounds', () => {
    const router = useRouter();

    var tracks = data.tracks;
    const rounds = ref([]);
    const roundsLength = ref(0);
    const currentRound = ref();
    const roundNumber = ref(1);
    const vsNumber = ref(1);
    const loadingRound = ref(true);
    const winTracks = ref([]);
    
    // define the vs rounds
    function defineVs() {
        if (tracks.length < 2) {
            // there ir no more tracks in the round
            currentRound.value = rounds.value.pop();
            roundsLength.value = rounds.value.length + 1;
            loadingRound.value = false;
            return;
        }

        let track1 = tracks[Math.floor(Math.random() * tracks.length)];
        let track2 = tracks[Math.floor(Math.random() * tracks.length)];

        if (track1.name === track2.name) {
            // select the both tracks again until they are different
            defineVs();
        } else {
            rounds.value.push([track1, track2]);
            // remove the tracks selected to avoid repeat them in the next round
            tracks.splice([tracks.findIndex(t => t.name === track1.name)], 1);
            tracks.splice([tracks.findIndex(t => t.name === track2.name)], 1);

            // continue to the next round
            defineVs();
        }
    }

    // define the first rounds
    defineVs()

    function redefineVs() {
        rounds.value = [];
        tracks = winTracks.value;
        winTracks.value = [];
        vsNumber.value = 1;
        roundNumber.value++;
        defineVs();
    }

    function selectWinTrack(winTrack) {
        loadingRound.value = true;
        winTracks.value.push(winTrack);
        currentRound.value = rounds.value.pop();

        if (currentRound.value === undefined) {
            if (winTracks.value.length === 1) {
                // it was the last round, the winner is done
                router.push('/winner');
            } else {
                // redefine the new rounds
                redefineVs();
            }
        } else {
            vsNumber.value++;
            loadingRound.value = false;
        }
    }

    return { rounds, roundsLength, loadingRound, currentRound, roundNumber, vsNumber, winTracks, selectWinTrack, redefineVs };
})