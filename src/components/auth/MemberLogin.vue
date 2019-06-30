<template lang="pug">
    v-card().elevation-5.pa-4
        v-card-text
            .title.text-uppercase.text-sm-center Member Login
            v-text-field(label="Email" prepend-inner-icon="mail_outline").mt-5
            v-text-field(label="Password" type="password" icon prepend-inner-icon="lock_outline")
            v-switch(label="Remember me" color="primary").ma-0
            v-btn(block color="primary").text-uppercase Login
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
  },
};
</script>

<style scoped>
span:hover {
    cursor:pointer;
}

</style>
