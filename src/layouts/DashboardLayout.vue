<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans">
    <!-- Sidebar Removed -->

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <!-- Topbar Removed -->

      <!-- Page Content -->
      <main>
        <router-view />
        <!-- Specific dashboard page content will be rendered here -->
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useRoute } from 'vue-router' // No longer needed if header is removed

// const route = useRoute() // No longer needed
// DashboardLayout specific script can go here
</script>

<style scoped>
/* DashboardLayout specific styles can go here */
/* .router-link-exact-active { @apply bg-zinc-700; } // Sidebar removed, so this is not needed */
</style>
