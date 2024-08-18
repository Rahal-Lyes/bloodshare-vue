import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./stores/index.js";
const app = createApp(App);
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faExclamation,
  faAddressBook,
  faSearch,
  faSignInAlt,
  faUserPlus,
  faDroplet,
  faUserSecret,
  faHeadset,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
/* import specific icons */

/* add icons to the library */

library.add(
  faDroplet,
  faExclamation,
  faAddressBook,
  faSearch,
  faSignInAlt,
  faUserPlus,
  faUserSecret,
  faHeadset,
  faBars
);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);
app.mount("#app");
