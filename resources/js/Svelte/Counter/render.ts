import Counter from "./Index.svelte";

const CounterComponent = new Counter({
  target: document.querySelector("#counter"),
  // props: {
  // 	name: 'world'
  // }
});

export default CounterComponent;
