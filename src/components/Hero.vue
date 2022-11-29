<template>
  <div class="flex bg-blue-800 py-10 border-t-gray-500 border-t-8">
    <div class="flex w-1/2 justify-center"> <!--Announcements-->
      <h1 class="mt-4 text-3xl text-white">Annual Meeting</h1>
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
