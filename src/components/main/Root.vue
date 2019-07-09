<template lang="pug">
    div(:style="`background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${url});`").pa-2.white--text
        v-container.pt-5.pl-5
            .subheading.grey--text.text--lighten-2 Доставка еды · {{ region }}
            .display-2 Быстрая доставка еды
            .display-2 в {{ region }}
            v-layout(row wrap).mt-4
              v-flex(xs9)
                v-layout(row fill-height)
                  v-text-field(label="Select" color="accent" solo clearable prepend-inner-icon="near_me").ma-0
                  v-btn(depressed color="primary").accent--text.ma-0 Показать рестораны
</template>

<script>
export default {
  props: {
    region: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      url: 'https://eda.yandex/assets/italyanskaya-3f94a08056888884b767865edd0b4236.png',
    };
  },
};
</script>
