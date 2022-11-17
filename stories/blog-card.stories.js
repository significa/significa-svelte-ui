import BlogCard from '../src/lib/components/BlogCard.svelte';

export default {
	title: 'Blog Card',
	component: BlogCard,
	argTypes: {
		post: {
			control: {
				type: 'object',
				properties: [
					{
						image: { control: 'text' },
						slug: { control: 'text' },
						title: { control: 'text' },
						author: {
							control: {
								type: 'object',
								properties: [
									{
										image: { control: 'text' },
										name: { control: 'text' },
										slug: { control: 'text' }
									}
								]
							}
						},
						categories: {
							control: {
								type: 'object',
								properties: [
									{
										name: { control: 'text' },
										slug: { control: 'text' }
									}
								]
							}
						}
					}
				]
			}
		}
	}
};

const Template = (args) => ({
	Component: BlogCard,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	post: {
		image:
			'https://images.unsplash.com/photo-1668573347542-82ccfd2965fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
		slug: 'blog-post',
		title: 'A blog post with a very long long long title that will wrap to a second line',
		author: {
			image:
				'https://images.unsplash.com/photo-1517436073-3b1b1b1b1b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			name: 'John Doe',
			slug: 'john-doe'
		},
		categories: [
			{
				name: 'Category 1',
				slug: 'category-1'
			},
			{
				name: 'Category 2',
				slug: 'category-2'
			}
		]
	}
};
