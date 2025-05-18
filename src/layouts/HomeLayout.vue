<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <nav class="container mx-auto flex justify-between items-center">
        <div class="text-xl font-bold">Dave's Dash</div>
        <div>
          <!-- Links for non-logged-in users, e.g., Login, Sign Up -->
          <a href="#" class="hover:underline px-3">Login</a>
          <a href="#" class="hover:underline px-3">Sign Up</a>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-4">
      <router-view />
      <!-- Page content will be rendered here -->
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center p-4">
      <p>&copy; {{ new Date().getFullYear() }} Dave's Dash. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// HomeLayout specific script can go here
</script>

<style scoped>
/* HomeLayout specific styles can go here */
</style>
