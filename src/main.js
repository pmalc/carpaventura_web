import { createApp } from 'vue';
import {createI18n } from 'vue-i18n';
import { createWebHistory, createRouter } from "vue-router";
import moment from "moment";

// Vuetify
/*import 'vuetify/lib/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/lib/components';
import * as directives from 'vuetify/lib/directives';

const vuetify = createVuetify({
    components,
    directives,
})
*/



/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* add some free styles */
import { faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCalendarAlt, faRestroom, faCampground, faBars, faLock, faArchway, faTicket, faGlobe, faChevronDown, faCircleChevronRight, faClock, faLocationDot, faWheelchairMove, faCommentDots} from '@fortawesome/free-solid-svg-icons';


/* add each imported icon to the library */
library.add(faTwitter, faWhatsapp, faHeart, faCalendarAlt, faRestroom, faCampground, faArchway, faTicket, faBars, faLock, faGlobe, faChevronDown, faCircleChevronRight, faClock, faLocationDot, faWheelchairMove, faCommentDots);

//STYLES
import './style.css';

//VIEWS
import App from './App.vue';
import Home1 from './views/Home1.vue';

//ROUTES

const routes = [
    {
        path: "/",
        component: Home1,
    },
    { 
      path: "/:pathMatch(.*)*", 
      redirect: "/" 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Languages

const i18n = createI18n({
    locale: 'es',
});

createApp(App).use(router, i18n, moment).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
