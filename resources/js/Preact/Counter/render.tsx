import { render } from "preact";
import Counter from "./index";

render(<Counter />, document.getElementById("counter") as HTMLElement);
