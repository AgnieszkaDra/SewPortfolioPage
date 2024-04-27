import { darken } from 'polished';

const theme = {
	colors: {
		white: '#FFFFFF',
		smokeWhite: '#F5F5F5',
		lightGrey: '#999999',
		darkGrey: '#282828',
		choco: '#e3d9c4',
		chocoDarken: darken(0.02, '#e3d9c4'),
		text: '#2a2b47'
	},
	fontSize: {
		small: '0.75rem',
		medium: '1rem',
		large: '2rem',
		extraLarge: '3rem',
	},
	padding: {
		small: '0.5rem 1rem',
		medium: '0.75rem 1.5rem',
		large: '1rem 2rem',
	},
	spacing: {
		small: '0.5rem',
		medium: '1rem',
		large: '1.5rem',
	},
};

export default theme
