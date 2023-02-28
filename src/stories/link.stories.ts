import type { Meta, StoryObj } from '@storybook/svelte';

import LinkStory from './link-story.svelte';

const meta = {
  title: 'UI/Link',
  component: LinkStory
} satisfies Meta<LinkStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
