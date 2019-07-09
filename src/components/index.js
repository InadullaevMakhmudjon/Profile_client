import Vue from 'vue';
import ImageHolder from './auth/ImageHolder.vue';
import RegisterImage from './auth/RegisterImage.vue';
import MemberLogin from './auth/MemberLogin.vue';
import MemberRegister from './auth/MemberRegister.vue';
import Root from './main/Root.vue';

const Components = {
  MemberLogin,
  MemberRegister,
  ImageHolder,
  RegisterImage,
  Root,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
