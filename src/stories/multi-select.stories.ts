import type { Meta, StoryObj } from '@storybook/svelte';

import MultiSelect from './multi-select-story.svelte';

const meta = {
  title: 'Forms/MultiSelect',
  component: MultiSelect,
  argTypes: {}
} satisfies Meta<MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
