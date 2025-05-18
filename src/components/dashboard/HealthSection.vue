<template>
  <section>
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-sm font-medium text-gray-900">Health</h2>
      <div class="flex items-center gap-2 text-xs text-gray-500">
        <button class="p-1 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span class="font-medium">Today</span>
        <button class="p-1 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    <div class="space-y-3">
      <!-- Squats -->
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-700">Squats</span>
        <div class="flex items-center text-sm">
          <button class="text-gray-400 hover:text-gray-600 px-1">-</button>
          <span class="mx-2 text-gray-800 font-medium">0</span>
          <button class="text-gray-400 hover:text-gray-600 px-1">+</button>
        </div>
      </div>
      <!-- Pushups -->
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-700">Pushups</span>
        <div class="flex items-center text-sm">
          <button class="text-gray-400 hover:text-gray-600 px-1">-</button>
          <span class="mx-2 text-gray-800 font-medium">0</span>
          <button class="text-gray-400 hover:text-gray-600 px-1">+</button>
        </div>
      </div>
      <!-- Steps -->
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-700">Steps</span>
        <span class="text-sm text-gray-800 font-medium">0</span>
      </div>
      <!-- Weight -->
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-700">Weight</span>
        <span class="text-sm text-gray-800 font-medium">70 <span class="text-xs text-gray-500">kg</span></span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Health section logic will go here
</script>
