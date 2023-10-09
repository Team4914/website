<script>
 import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Create a writable store for the theme
  const theme = writable(localStorage.getItem('theme') || 'light');

  onMount(() => {
    // Listen for changes to localStorage and update the store
    window.addEventListener('storage', (event) => {
      if (event.key === 'theme') {
        theme.set(event.newValue);
      }
    });
  });
</script>
