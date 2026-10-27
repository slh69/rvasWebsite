<script setup>
import { festivalIsOver } from '../festival.mjs'

const festivalEnded = festivalIsOver()
</script>

<template>
  <div class="items-center bg-blue-800 py-10 border-t-gray-500 border-t-8 md:flex">
    <div class="w-full px-6 md:w-1/2">
      <h1 class="mx-auto mb-4 max-w-lg text-center text-3xl leading-tight text-white">Rossville Volunteer Ambulance Service</h1>
      <p class="mx-auto mb-6 max-w-lg text-center text-lg text-blue-100">Volunteers serving the Rossville, Indiana community since 1974.</p>
      <template v-if="!festivalEnded">
        <h2 class="mx-auto max-w-lg text-center text-3xl leading-tight text-white">Visit our booth at the park during the Summer's End Festival Aug 22</h2>
        <p class="mt-4 text-center text-xl font-semibold text-white">There will be prizes!</p>
      </template>
      <template v-else>
        <h2 class="mx-auto max-w-lg text-center text-3xl leading-tight text-white">Interested in volunteering?</h2>
        <p class="mx-auto mt-4 max-w-md text-center text-xl text-white">
          Send us an email and find out how.
          <a class="block font-semibold underline hover:text-red-200" href="mailto:rvassec@gmail.com">rvassec@gmail.com</a>
        </p>
      </template>
    </div> 

    <div class="mt-8 flex justify-center px-6 md:mt-0 md:w-1/2">
      <img class="h-auto w-full max-w-3xl" src="../assets/rvasBuilding.jpg" width="740" height="220" fetchpriority="high" alt="Rossville Volunteer Ambulance Service building in Rossville, Indiana" />
    </div> 

  </div>
</template>
