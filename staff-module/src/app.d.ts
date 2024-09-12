// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
            formCompletion: {
                step1: boolean
                step2: boolean
                step3: boolean
            }
        }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
