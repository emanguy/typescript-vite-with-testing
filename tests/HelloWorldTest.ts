import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../src/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
	it('renders', () => {
		shallowMount(HelloWorld, {props: {msg: "ayy lmao"}});
	})
})
