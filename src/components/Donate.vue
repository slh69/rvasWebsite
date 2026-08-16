<script setup>
const stripeLinks = {
  oneTime: 'https://donate.stripe.com/8x2fZi0ws8QQ6CM1wX67S01',
  monthly: 'https://donate.stripe.com/dRmcN6frm1oobX62B167S03'
}
</script>

<template>
  <main class="bg-blue-800 px-4 py-12 md:py-16">
    <section class="mx-auto max-w-4xl text-center text-white">
      <p class="font-righteous text-sm uppercase tracking-[0.2em] text-blue-200">Support RVAS</p>
      <h1 class="mt-3 font-lobster text-4xl md:text-5xl">Help us answer the next call</h1>
      <p class="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
        Donations go toward equipment, training, and general upkeep of the squad headquarters
      </p>

      <div class="mt-10 grid gap-6 text-left md:grid-cols-2">
        <article class="rounded-xl border-t-4 border-red-600 bg-white p-7 text-gray-900 shadow-xl">
          <h2 class="text-center text-2xl font-bold text-blue-900">Make a one-time gift</h2>
          <p class="mt-2 text-gray-600">Choose the amount of your secure donation.</p>
          <a v-if="stripeLinks.oneTime" :href="stripeLinks.oneTime" class="mx-auto mt-6 block max-w-xs">
            <img class="w-full rounded-xl" src="/donation-qr.png" alt="Scan to make a one-time donation with Stripe" />
          </a>
          <a
            v-if="stripeLinks.oneTime"
            :href="stripeLinks.oneTime"
            class="mt-6 block rounded-md bg-red-600 px-5 py-3 text-center font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          >Choose your amount</a>
          <button v-else class="mt-7 w-full cursor-not-allowed rounded-md bg-gray-300 px-5 py-3 font-bold text-gray-600" disabled>
            Stripe link coming soon
          </button>
        </article>

        <article class="rounded-xl border-t-4 border-red-600 bg-white p-7 text-gray-900 shadow-xl">
          <h2 class="text-center text-2xl font-bold text-blue-900">Give Monthly</h2>
          <p class="mt-2 text-gray-600">Choose the amount of your secure monthly donation.</p>
          <a :href="stripeLinks.monthly" class="mx-auto mt-6 block max-w-xs">
            <img class="w-full rounded-xl" src="/monthly-donation-qr.png" alt="Scan to make a monthly donation with Stripe" />
          </a>
          <a
            :href="stripeLinks.monthly"
            class="mt-6 block rounded-md bg-blue-800 px-5 py-3 text-center font-bold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
          >Choose your monthly amount</a>
        </article>
      </div>

      <p class="mt-8 text-blue-100">Questions? <a class="font-semibold text-white underline hover:text-red-200" href="mailto:rvassec@gmail.com">Email RVAS</a>.</p>
    </section>
  </main>
</template>
