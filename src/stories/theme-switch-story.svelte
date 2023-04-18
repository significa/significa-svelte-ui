<script lang="ts">
  import ThemeSwitch from '../lib/components/theme-switch.svelte';
  let theme: 'dark' | 'light' = 'light';

  const switchTheme = () => {
    if (theme === 'light') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
  };
</script>

<ThemeSwitch {theme} on:toogle={() => switchTheme()} />
