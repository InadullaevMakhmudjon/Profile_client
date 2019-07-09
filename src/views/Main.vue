<template lang="pug">
  v-container.pa-0.border
    Root(:region="region")
    // All categories
    v-layout(wrap justify-center align center).border.pl-5.py-3
      v-flex(xs10)
        v-btn(round flat v-for="item in catalog" :key="item.id" :class="item.id === 1 ? 'primary':''").text-capitalize.grey--text.text--darken-3.mx-0 {{ item.name }}
      v-flex(xs2)
        v-btn(flat round).text-capitalize Ещё
          v-icon(right).ma-0 expand_more
    // Searching
    v-layout(row wrap justify-center align-center).border.pl-3.pt-3
      v-flex(xs10)
        v-text-field(prepend-inner-icon="search" left outline single-line label="Название, кухня или блюдо" clearable).ma-0
    // All main products
    v-layout(row wrap).border.pa-4
      v-flex(xs12)
        v-container
          .display-1.font-weight-medium Рестораны
      v-flex(xs4 v-for="item in items" :key="item.id")
        RootItem(:image="item.image" :desc="item.desc" :star="item.star" :value="item.value")
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
        { id: 9, name: 'Вегги' },
      ],
      items: [
        {
          id: 1, name: 'Burger King', image: 'https://eda.yandex/images/1368744/6a5ad1bf2109cf948df0780d94c3e5ba-600x345.jpeg', star: '', value: 'Новый', desc: 'Американская · Бургеры · ₽',
        },
        {
          id: 2, name: 'Burger King', image: 'https://eda.yandex/images/1370147/7141c061362240fc2378dd33644693b6-600x345.jpeg', star: '3.1', value: '', desc: 'Американская · Бургеры · ₽',
        },
        {
          id: 3, name: 'Burger King', image: 'https://eda.yandex/images/1380157/7ae7cd488998e9fc017bd215fa1d1d8b-600x345.jpeg', star: '2.2', value: '', desc: 'Американская · Бургеры · ₽',
        },
        {
          id: 4, name: 'Burger King', image: 'https://eda.yandex/images/1368744/a500ac6a7d5791b42d4166800cffcca3-600x345.jpeg', star: '4.5', value: '', desc: 'Американская · Бургеры · ₽',
        },
        {
          id: 5, name: 'Burger King', image: 'https://eda.yandex/images/1370147/50e83c2564aec558c62b75c12d1e1b08-600x345.jpeg', star: '', value: 'Новый', desc: 'Американская · Бургеры · ₽',
        },
        {
          id: 6, name: 'Burger King', image: 'https://eda.yandex/images/1368744/6a5ad1bf2109cf948df0780d94c3e5ba-600x345.jpeg', star: '', value: 'Новый', desc: 'Американская · Бургеры · ₽',
        },
        {
          id: 7, name: 'Burger King', image: 'https://eda.yandex/images/1368744/6a5ad1bf2109cf948df0780d94c3e5ba-600x345.jpeg', star: '', value: 'Новый', desc: 'Американская · Бургеры · ₽',
        },
        {
          id: 8, name: 'Burger King', image: 'https://eda.yandex/images/1368744/6a5ad1bf2109cf948df0780d94c3e5ba-600x345.jpeg', star: '', value: 'Новый', desc: 'Американская · Бургеры · ₽',
        },
        {
          id: 9, name: 'Burger King', image: 'https://eda.yandex/images/1368744/6a5ad1bf2109cf948df0780d94c3e5ba-600x345.jpeg', star: '2.2', value: '', desc: 'Американская · Бургеры · ₽',
        },
        {
          id: 10, name: 'Burger King', image: 'https://eda.yandex/images/1368744/6a5ad1bf2109cf948df0780d94c3e5ba-600x345.jpeg', star: '1.1', value: '', desc: 'Американская · Бургеры · ₽',
        },
      ],
    };
  },
};

</script>
