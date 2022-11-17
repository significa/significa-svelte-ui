import Avatar from '../src/lib/components/Avatar.svelte';
import { AvatarSize } from '../src/lib/types/types';

export default {
	title: 'Avatar',
	component: Avatar,
	argTypes: {
		image: { control: 'text' },
		size: {
			options: Object.values(AvatarSize).filter((x) => typeof x === 'string'),
			mapping: AvatarSize,
			control: {
				type: 'select'
			}
		}
	}
};

const Template = (args) => ({
	Component: Avatar,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	image:
		'https://images.unsplash.com/photo-1517436073-3b1b1b1b1b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
};
