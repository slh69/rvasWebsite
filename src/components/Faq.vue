<template>
    <div class="sm:w-full sm:px-2 md:w-2/3 mx-auto md:pb-10 md:pt-10 clear-both">
        <h2 class="mb-4 text-center text-2xl font-bold">Volunteering and funding FAQs</h2>
        <details v-for="item in items" :key="item.title" class="mb-4">
            <summary class="bg-blue-300 py-4 mx-auto text-center rounded-md cursor-pointer">{{item.title}}</summary>

            <p class="bg-gray-300 mx-auto p-4">{{item.content}}</p>
        </details>
    </div>
</template>

<script setup>
const items = [
{
     title: 'How do I become an EMR (First Responder)?',
     content:'Attend a 49.5 hour class, pass a background check, CPR certification, Become familiar with Rossville\'s ambulance both in driving and supply location'
    },    
    {
     title: 'How do I become an EMT?',
     content:'Attend a 140 hour class, pass a background check, pass driving, ambulance checkouts, CPR certification'
    },
    {
     title: 'How do I become a Driver?',
     content: 'CPR, basic driving, ambulance checkouts'
    },
    {
     title: 'What other volunteers do you need?',
     content: 'Yard maintenance, Building Maintenance, Radio Maintenance, Communications, Babysit, Board Members'
    },
    {
     title: 'How is Rossville Ambulance Funded?',
     content: 'The county provides the ambulance, fuel, truck maintenance, and some training. V.A.S. remains responsible for the cost of EMT and EMR classes, some training, building & grounds maintenance & repair, and some supplies. Donations and memorial contributions help cover these expenses. All EMTs, EMRs, and drivers are volunteers.'
    }
     ]
</script>
