<script lang="ts">
  import Switch from '../lib/components/switch.svelte';
  let theme: 'dark' | 'light' = 'light';

  const switchTheme = () => {
    if (theme === 'light') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
  };
</script>

<Switch {theme} on:toogle={() => switchTheme()} />
