<template>
  <div class="md:flex bg-blue-800 py-10 border-t-gray-500 border-t-8">
    <div class="sm:w-full md:w-1/2 md:justify-center"> <!--Announcements-->
      <h1 class="mt-4 text-3xl text-white text-center">Annual Meeting</h1>
      <p class="text-white text-xl text-center">Dec 8, 2022 ~  6:30 pm</p>
      <p class="text-white text-xl text-center">50 E North Street</p>
    </div> 

    <div class="flex justify-end">
      <img src="../assets/rvasBuilding.jpg"  />
    </div> 

  </div>
</template>

<script setup>
import { ref } from "vue";

const announcements = ref(
  {
    title: "Annual Meeting",
    date: "Thursday, Dec 8, 2022",
    details:
      "Come support your ambulance service volunteer.  Find out what is going on in your community.",
  },
);
</script>
