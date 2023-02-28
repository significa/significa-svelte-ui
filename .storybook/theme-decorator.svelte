<script lang="ts">
  export let theme: string;

  $: {
    const css = document.createElement('style');
    css.appendChild(
      document.createTextNode(
        `* {
          -webkit-transition: none !important;
          -moz-transition: none !important;
          -o-transition: none !important;
          -ms-transition: none !important;
          transition: none !important;
        }`
      )
    );
    document.head.appendChild(css);

    // change theme
    document.body.setAttribute('data-theme', theme);

    // Calling getComputedStyle forces the browser to redraw
    const _ = window.getComputedStyle(css).opacity;
    document.head.removeChild(css);
  }
</script>

<slot />
