import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
	activeTab: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
	state() {
		return {
			activeTab: "home",
		};
	},
	getters: {
		activeTab(_state, getters) {
			return getters.activeTab;
		},
	},
	mutations: {
		tabMutation(state, tab) {
			state.activeTab = tab;
		},
	},
	actions: {
		changeTab(context, tab) {
			context.commit("tabMutation", tab);
		},
	},
});
