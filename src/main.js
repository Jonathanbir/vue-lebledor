import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Dropdown from "primevue/dropdown";
import "./assets/main.css";
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "../src/index.css";

const app = createApp(App);

app.use(router);

app.use(PrimeVue, { ripple: true });

app.component("Dropdown", Dropdown);

app.mount("#app");
