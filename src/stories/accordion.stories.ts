import type { Meta, StoryObj } from '@storybook/svelte';

import Accordion from './accordion-story.svelte';

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  argTypes: {}
} satisfies Meta<Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
