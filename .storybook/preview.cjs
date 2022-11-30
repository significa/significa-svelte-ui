import '../src/lib/styles/features/elevated-links.css';
import '../src/lib/styles/index.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	backgrounds: { disable: true },
	themes: {
		default: 'light',
		list: [
			{ name: 'light', class: ['theme-light'], color: '#ffffff' },
			{ name: 'dark', class: ['theme-dark'], color: '#000000' }
		]
	}
};
