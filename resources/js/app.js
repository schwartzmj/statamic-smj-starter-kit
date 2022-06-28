// import "../css/tailwind.css";
import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";

// Global get CSRF token function (used by forms).
window.getToken = async () => {
  return await fetch("/!/DynamicToken/refresh")
    .then((res) => res.json())
    .then((data) => {
      return data.csrf_token;
    })
    .catch(function (error) {
      this.error = "Something went wrong. Please try again later.";
    });
};

Alpine.plugin(persist);
Alpine.plugin(focus);
Alpine.plugin(collapse);

window.Alpine = Alpine;
Alpine.start();
