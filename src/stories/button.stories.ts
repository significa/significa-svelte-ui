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
      options: ['md', 'lg']
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

export const Primary: Story = {
  args: {
    label: 'Hello world'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Hello world',
    variant: 'secondary'
  }
};

export const Ghost: Story = {
  args: {
    label: 'Hello world',
    variant: 'ghost'
  }
};

export const Danger: Story = {
  args: {
    label: 'Hello world',
    variant: 'danger',
    icon: 'info'
  }
};

export const Success: Story = {
  args: {
    label: 'Hello world',
    variant: 'success',
    icon: 'check'
  }
};

export const Large: Story = {
  args: {
    label: 'Hello world',
    size: 'lg'
  }
};

export const Icon: Story = {
  args: {
    label: 'Hello world',
    icon: 'handbook'
  }
};

export const JustIcon: Story = {
  args: {
    icon: 'link'
  }
};

export const Arrow: Story = {
  args: {
    label: 'Hello world',
    arrow: true
  }
};

export const Loading: Story = {
  args: {
    label: 'Hello world',
    loading: true
  }
};

export const IconAndArrow: Story = {
  args: {
    label: 'Hello world',
    icon: 'handbook',
    arrow: true
  }
};

export const Disabled: Story = {
  args: {
    label: 'Hello world',
    disabled: true
  }
};
