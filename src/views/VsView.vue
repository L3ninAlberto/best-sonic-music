<template>
    <h2 class="text-center text-3xl">Choose the best!</h2>

    <div class="w-full flex gap-x-10 justify-center items-center">
        <div class="w-80 shadow-lg shadow-blue-950 rounded-xl">
            <h3 class="py-2 text-stone-700 text-center bg-white rounded-t-xl">Track name</h3>
            <iframe class="w-full h-80 rounded-b-xl" src="https://www.youtube.com/embed/PvuYSybooLg?si=qUC_rAkHz0jCn5W7&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <!-- no video controls: &amp;controls=0 -->
        </div>
        <span class="text-4xl">VS</span>
        <div class="w-80 shadow-lg shadow-blue-950 rounded-xl">
            <h3 class="py-2 text-stone-700 text-center bg-white rounded-t-xl">Track name</h3>
            <iframe class="w-full h-80 rounded-b-xl" src="https://www.youtube.com/embed/27Nv6cweyhM?si=YFsCbtXD4XPjk3pf&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</template>