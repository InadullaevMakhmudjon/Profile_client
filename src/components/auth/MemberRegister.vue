<template lang="pug">
    v-card().elevation-5.pa-4
        v-card-text
            .title.text-uppercase.text-sm-center Registration
            v-text-field(label="Username" prepend-inner-icon="person_outline").mt-4
            v-text-field(label="Email" icon prepend-inner-icon="mail_outline")
            v-text-field(label="Password" type="password" icon prepend-inner-icon="lock_outline")
            v-btn(block color="primary").text-uppercase.mt-4 Register
            v-layout(row justify-center).mt-4
                .body-2.grey--text Dont want?
                span(@click="regbtn").body-2.primary--text.ml-2 Back

</template>

<script>
export default {
  props: {
    regbtn: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
span:hover{
    cursor: pointer;
}
</style>
