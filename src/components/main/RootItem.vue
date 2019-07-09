<template lang="pug">
    v-container(@click="cleckedme").hand
        v-img(style="border-radius: 10px;" max-height="170" :src="image").zoom
        .title.mt-2.mb-2 Burger king
        v-layout(wrap align-center)
          div(v-if="value").body-1.mr-2.highlite {{ value }}
          div(v-if="star").mr-2.highlite
            v-icon(small color="white").mr-1 star
            .body-1 {{ star }}
          v-icon(small).ma-1.outlined room_service
          .body-1 Заказ от 0 ₽
        .body-1.mt-1.grey--text {{ desc }}
</template>

<script>
export default {
  props: ['image', 'desc', 'star', 'value'],
  methods: {
    cleckedme() {
      alert('hello');
    },
  },
};
</script>
<style scoped>

</style>
