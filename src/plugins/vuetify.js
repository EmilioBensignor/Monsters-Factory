import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light: {
                    primary:    "#4caf50",
                    secondary:  "#8bc34a",
                    accent:     "#795548",
                    error:      "#f44336",
                    warning:    "#ffc107",
                    info:       "#607d8b",
                    success:    "#9c27b0"
                    }
            }
    }
});
