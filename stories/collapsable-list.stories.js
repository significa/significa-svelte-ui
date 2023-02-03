import CollapsableList from '../src/lib/components/CollapsableList.svelte';

export default {
	title: 'Collapsable List',
	component: CollapsableList
};

const Template = (args) => ({
	Component: CollapsableList,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	items: [{ label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }, { label: '5' }],
	title: 'Collapsable List'
};
