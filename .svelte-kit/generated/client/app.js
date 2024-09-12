export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [3];

export const dictionary = {
		"/": [4],
		"/(app)/staff-member": [5,[2,3]],
		"/(app)/staff-member/(add staff)/assign-role": [~6],
		"/(app)/staff-member/(add staff)/code": [~7],
		"/(app)/staff-member/(add staff)/create": [~8],
		"/(app)/staff-member/delete": [10],
		"/(app)/staff-member/update/code/[id]": [~11],
		"/(app)/staff-member/update/details/[id]": [~12],
		"/(app)/staff-member/update/role/[id]": [~13],
		"/(app)/staff-member/(add staff)/upload": [~9],
		"/test": [14]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';