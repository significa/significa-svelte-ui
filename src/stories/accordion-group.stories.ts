import type { Meta, StoryObj } from '@storybook/svelte';

import AccordionGroup from './accordion-group-story.svelte';

const meta = {
  title: 'UI/Accordion Group',
  component: AccordionGroup,
  argTypes: {}
} satisfies Meta<AccordionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
