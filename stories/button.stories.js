import Button from '../src/lib/components/button.svelte';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' }
  }
};

const Template = (args) => ({
  Component: Button,
  props: args
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button'
};
