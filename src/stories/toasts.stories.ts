import type { Meta, StoryObj } from '@storybook/svelte';

import Toasts from './toasts-story.svelte';

const meta = {
  title: 'Toasts',
  component: Toasts,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right'
      ]
    },
    gap: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl']
    },
    inset: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl']
    }
  }
} satisfies Meta<Toasts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const TopLeft: Story = {
  args: {
    position: 'top-left'
  }
};

export const TopCenter: Story = {
  args: {
    position: 'top-center'
  }
};

export const TopRight: Story = {
  args: {
    position: 'top-right'
  }
};

export const BottomLeft: Story = {
  args: {
    position: 'bottom-left'
  }
};

export const BottomCenter: Story = {
  args: {
    position: 'bottom-center'
  }
};

export const BottomRight: Story = {
  args: {
    position: 'bottom-right'
  }
};

export const Gap: Story = {
  args: {
    gap: 'md'
  }
};

export const Inset: Story = {
  args: {
    inset: 'md'
  }
};
