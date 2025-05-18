<template>
  <div class="max-w-lg mx-auto px-6 py-12">
    <header class="mb-12">
      <h1 class="text-base font-medium text-gray-900"><span class="font-bold">Dave's</span> Life</h1>
    </header>

    <main class="space-y-12">
      <HealthSection />
      <DaysSinceSection />
      <LifeLogSection />
      <WealthSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import HealthSection from '@/components/dashboard/HealthSection.vue'
import DaysSinceSection from '@/components/dashboard/DaysSinceSection.vue'
import LifeLogSection from '@/components/dashboard/LifeLogSection.vue'
import WealthSection from '@/components/dashboard/WealthSection.vue'

// DashboardIndexPage specific script, if any, will go here
</script>

<style scoped>
/* Styles specific to DashboardIndexPage, if any */
</style>
