<template>
    <div class="sm:w-full sm:px-2 md:w-2/3 mx-auto md:pb-10 md:pt-10 clear-both">
        <dl v-for="item in items" class="mb-4">
            <dt v-on:click="item.open = !item.open" class="bg-blue-300 py-4 mx-auto text-center rounded-md">{{item.title}}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline float-right mr-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg></dt>

            <dd v-if="item.open" class="bg-gray-300 mx-auto p-4">{{item.content}}</dd>
        </dl>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const items = ref([
{
     title: 'How do I become an EMR (First Responder)?',
     content:'Attend a 49.5 hour class, pass a background check, CPR certification, Become familiar with Rossville\'s ambulance both in driving and supply location',
     open: false     
    },    
    {
     title: 'How do I become an EMT?',
     content:'Attend a 140 hour class, pass a background check, pass driving, ambulance checkouts, CPR certification',
     open: false     
    },
    {
     title: 'How do I become a Driver?',
     content: 'CPR, basic driving, ambulance checkouts',
     open: false
    },
    {
     title: 'What other volunteers do you need?',
     content: 'Yard maintenance, Building Maintenance, Radio Maintenance, Communications, Babysit, Board Members',
     open: false
    },
    {
     title: 'How is Rossville Ambulance Funded?',
     content: 'The county provides the ambulance, fuel, truck maintenance, and some training. V.A.S. remains responsible for the cost of EMT and EMR classes, some training, building & grounds maintenance & repair, and some supplies. Donations and memorial contributions help cover these expenses. All EMTs, EMRs, and drivers are volunteers.',
     open: false
    }
     ])
</script>
