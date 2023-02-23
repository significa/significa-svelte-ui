import type { Meta, StoryObj } from '@storybook/svelte';

import Icon, { icons } from '../lib/components/icon.svelte';

const meta = {
  title: 'UI/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons)
    }
  }
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: 'handbook'
  }
};
