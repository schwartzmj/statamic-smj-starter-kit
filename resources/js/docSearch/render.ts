import DocSearch from "./Index.svelte";

const DocSearchComponent = new DocSearch({
  target: document.querySelector("#doc-search"),
  // props: {
  // 	name: 'world'
  // }
});

export default DocSearchComponent;
