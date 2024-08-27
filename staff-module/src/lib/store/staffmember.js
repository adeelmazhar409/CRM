// interface UserProfile {
//     name: string;
//     email: string;
//     role: string;
//     mobile?: string; // Optional
//     nickname?: string; // Optional
// }

import { writable } from 'svelte/store'

export const selectedUser = writable(null)
