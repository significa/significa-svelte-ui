import type { Meta, StoryObj } from '@storybook/svelte';

import { icons } from '../lib/components/icon.svelte';
import TextButton from './text-button-story.svelte';

const meta = {
  title: 'UI/Text Button',
  component: TextButton,
  argTypes: {
    iconLeft: {
      control: { type: 'select' },
      options: Object.keys(icons)
    },
    iconRight: {
      control: { type: 'select' },
      options: Object.keys(icons)
    }
  }
} satisfies Meta<TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const IconLeft: Story = {
  args: {
    iconLeft: 'handbook'
  }
};

export const IconRight: Story = {
  args: {
    iconRight: 'arrow-right'
  }
};

export const IconBoth: Story = {
  args: {
    iconLeft: 'handbook',
    iconRight: 'arrow-right'
  }
};
