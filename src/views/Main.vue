<template lang="pug">
  v-container.pa-0.border
    Root(:region="region")
    v-layout(wrap row justify-center align center).pl-5.py-3
      v-flex(xs10)
        v-btn(round flat v-for="item in catalog" :key="item.id" :class="item.id === 1 ? 'yellow':''").mx-0 {{ item.name }}
      v-flex(xs2)
        v-btn(flat round) Ещё
          v-icon(right).ma-0 expand_more

</template>

<script>
export default {
  data() {
    return {
      region: 'Ташкент',
      catalog: [
        { id: 1, name: 'Все' },
        { id: 2, name: 'Бургеры' },
        { id: 3, name: 'Суши' },
        { id: 4, name: 'Пицца' },
        { id: 5, name: 'Фудмолл' },
        { id: 6, name: 'Здоровая еда' },
        { id: 7, name: 'Лапша Вок' },
        { id: 8, name: 'Вегги' },
      ],
    };
  },
};

</script>
