import type { Config } from 'tailwindcss';

import { join } from 'path';
import { skeleton } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton-svelte'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {
			spacing: {
				128: '512px',
				160: '640px',
				192: '768px'
			}
		}
	},

	plugins: [
		skeleton({
			themes: [themes.cerberus, themes.rose]
		})
	]
} as Config;
