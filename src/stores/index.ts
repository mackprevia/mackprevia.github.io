import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
	count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
	state() {
		return {
			count: 0,
		};
	},
	getters: {
		counter(_state, getters) {
			return getters.count;
		},
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
	actions: {
		increment(context) {
			context.commit("increment");
		},
	},
});
