import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '../assets/style/app.css';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: localStorage.getItem('color') || '#2196F3',
  },
});
