<template lang="pug">
    v-app
      v-toolbar(height="80px").elevation-0.toolbar_border
        v-toolbar-title
          img.ml-4.mt-2(:src="logo").link
        v-spacer
        router-link(to="/" tag="div").link
          .title Рестораны
        router-link(to="/" tag="div").link.ml-5
          .title Доставка
        v-spacer
        v-menu(offset-y max-height="300" :nudge-width="200")
          template(v-slot:activator="{ on }")
            v-btn(round medium outline color="grey" v-on="on")
              .black--text {{ region }}
          v-list
            v-list-tile(v-for="item in regions" :key="item.id" @click="region = item.name")
              v-list-tile-title.grey--text.text--darken-3.ml-4 {{ item.name }}
        v-btn(round medium outline color="grey").ml-2
          .black--text Войти
      v-container.pa-2
        router-view
</template>

<script>
import { AXIOS } from '../server/Api';
import Auth from '../server/Auth';

export default {
  data() {
    return {
      logo: 'https://eda.yandex/assets/logo-2b8cf6236b94ab214aa24b00ce106d16.svg',
      region: 'Ташкент',
      regions: [
        { id: 1, name: 'Ташкент' },
        { id: 1, name: 'Самарканд' },
        { id: 1, name: 'Бухара' },
        { id: 1, name: 'Денау' },
        { id: 1, name: 'Термез ' }
      ],
    };
  },
  mounted() {
    AXIOS.interceptors.response.use(undefined, (err) => {
      if (err.response && err.response.status === 401) { this.$router.push('/logout'); }
    });
    Auth.about()
      .then((user) => {
        this.user = user;
        localStorage.setItem('user', user);
      });
  },
};
</script>

<style>

</style>
