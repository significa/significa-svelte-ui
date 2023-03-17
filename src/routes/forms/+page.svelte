<script lang="ts">
  import CheckboxGroup from '$lib/components/forms/checkbox-group.svelte';
  import Checkbox from '$lib/components/forms/checkbox.svelte';
  import FloatingInput from '$lib/components/forms/floating-input.svelte';
  import FloatingSelect from '$lib/components/forms/floating-select.svelte';
  import Input from '$lib/components/forms/input.svelte';
  import Label from '$lib/components/forms/label.svelte';
  import Radio from '$lib/components/forms/radio.svelte';
  import Select from '$lib/components/forms/select.svelte';

  let value = '';
  let value2 = '';

  let select = '';
  let select2 = '';
  let options = ['everything', 'everywhere', 'all the time'];

  let checked = false;
  let checkboxes: [];
  let radio: string;
</script>

<div class="flex">
  {#each ['light', 'dark', 'yellow'] as theme}
    <div class="flex flex-1 flex-col gap-8 p-4" data-theme={theme}>
      <div>
        <div>
          <Label required for="input1">Your name</Label>
          <Input id="input1" placeholder="Type something" bind:value />
        </div>
      </div>

      <div>
        <FloatingInput label="Type something" bind:value={value2} />
      </div>

      <div>
        <Select bind:value={select}>
          <option value="" disabled>Select an option</option>
          {#each options as option}
            <option value={option}>{option}</option>
          {/each}
        </Select>
      </div>

      <div>
        <FloatingSelect label="Select an option" bind:value={select2}>
          <option value="" disabled>Select an option</option>
          {#each options as option}
            <option value={option}>{option}</option>
          {/each}
        </FloatingSelect>
      </div>

      <label for="checkbox1" class="flex items-center">
        <Checkbox id="checkbox1" bind:checked />
        <span class="pl-1">I agree with everything</span>
      </label>

      <div>
        {#each options as option}
          <label for="checkbox-{option}" class="flex items-center">
            <CheckboxGroup id="checkbox-{option}" bind:group={checkboxes} value={option} />
            <span class="pl-1">{option}</span>
          </label>
        {/each}
      </div>

      <div>
        {#each options as option}
          <label for="radio-{option}" class="flex items-center">
            <Radio id="radio-{option}" bind:group={radio} value={option} />
            <span class="pl-1">{option}</span>
          </label>
        {/each}
      </div>
    </div>
  {/each}
</div>

<pre class="mt-3">
  Input: {value}
  Input 2: {value2}
  Selected: {select}
  Selected 2: {select2}
  Checked: {checked}
  Checkbox Options: {JSON.stringify(checkboxes)}
  Radio Options: {JSON.stringify(radio)}
</pre>
