import { icons } from '$lib/components/icon.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './button-story.svelte';

const meta = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'danger', 'success']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md']
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons)
    },
    arrow: {
      control: { type: 'boolean' }
    },
    loading: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'sm'
  }
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    icon: 'info'
  }
};

export const Success: Story = {
  args: {
    variant: 'success',
    icon: 'check'
  }
};

export const Small: Story = {
  args: {
    size: 'sm'
  }
};

export const Icon: Story = {
  args: {
    icon: 'handbook'
  }
};

export const Arrow: Story = {
  args: {
    arrow: true
  }
};

export const Loading: Story = {
  args: {
    loading: true
  }
};

export const IconAndArrow: Story = {
  args: {
    icon: 'handbook',
    arrow: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
