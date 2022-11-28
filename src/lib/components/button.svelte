<script lang="ts">
  export let label: string;
</script>

<button>{label}</button>

<style lang="postcss">
  button {
    all: unset;

    background-color: red;
    color: white;

    padding: 10px;
    font-size: 1rem;

    @mixin text-5xl;

    @media (--md) {
      background-color: blue;

      @mixin text-xs;
    }
  }
</style>
