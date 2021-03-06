import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  options: {
    customProperties: true,
  },
  theme: {
    primary: localStorage.getItem('color') || '#2196F3',
    accent: '000',
  },
});
