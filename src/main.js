import { createApp } from "vue";
import App from "./App.vue";

import router from './routes';

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app")
const app = createApp(App);
app.use(router);

app.component('fa', FontAwesomeIcon);

app.mount("#app");
