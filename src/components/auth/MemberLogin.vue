<template lang="pug">
    v-card().elevation-5.pa-4
        v-card-text
            v-menu(transition="slide-y-transition")
              template(v-slot:activator="{ on }")
                v-btn(fab small color="primary" absolute top right v-on="on")
                  v-icon brush
              v-list
                v-list-tile(v-for="(item,index) in colors" :key="index" @click="selected(index)")
                  v-list-tile-title
                    v-layout
                      div(:style="`background-color: ${item.color}; border-color: ${ item.border }`").theme-color
                      .subheading.font-weight-medium.ml-2 {{ item.name }}
            .title.text-uppercase.text-sm-center Member Login
            v-text-field(label="Username" v-model="username" prepend-inner-icon="mail_outline").mt-5
            v-text-field(label="Password" v-model="password" type="password" icon prepend-inner-icon="lock_outline")
            v-switch(label="Remember me" v-model="checked" color="primary").ma-0
            v-btn(block color="primary" @click="login({ username, password, checked })").text-uppercase Login
            v-layout(row justify-center).mt-5
                .body-2.grey--text Not a member?
                span(@click="regbtn").body-2.primary--text.ml-2 Create Account

</template>

<script>
export default {
  props: {
    regbtn: {
      type: Function,
      required: true,
    },
    login: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      checked: false,
      username: '',
      password: '',
      colors: [
        { name: 'Blue', color: '#2196F3', border: '#1565C0' },
        { name: 'Purple', color: '#9C27B0', border: '#4A148C' },
        { name: 'Brown', color: '#795548', border: '#3E2723' },
        { name: 'Green', color: '#4CAF50', border: '#1B5E20' },
        { name: 'Amber', color: '#FFE033', border: '#FF6F00' },
      ],
    };
  },
  methods: {
    selected(index) {
      this.$store.dispatch('changedColor', this.colors[index]);
      window.location.reload();
    },
  },
};
</script>

<style scoped>
span:hover {
    cursor:pointer;
}
.theme-color{
  width: 22px;
  height: 22px;
  border: 1px solid;
  border-radius:50%;
}
</style>
