<template lang="pug">
    v-app
        v-content
            div(:style="{ 'border-color': color }").bkg
            v-container(fluid fill-height)
                v-layout(wrap)
                    v-flex(xs12)
                        v-container(fill-height)
                            v-layout(wrap justify-center align-content-center)
                                v-flex(xs12 sm4 md8).hidden-sm-and-down
                                    .title.text-md-center.text-uppercase Loream Ipsum
                                    .subheading.text-md-center.grey--text.mt-3 {{ subheading }}
                                    transition(name="img" mode="out-in")
                                        ImageHolder(v-if="islogin")
                                        RegisterImage(v-else)
                                v-flex(xs12 sm8 md4).pa-3
                                    transition(name="fade" mode="out-in")
                                        MemberLogin(v-if="islogin" :login="login" :regbtn="()=> islogin = false")
                                        MemberRegister(v-else :register="register" :regbtn="()=> islogin = true")
</template>

<script>
import Auth from '../server/Auth';

export default {
  data() {
    return {
      user: {},
      islogin: true,
      color: this.$vuetify.theme.primary,
      subheading: 'Lorem ipsum dolor sit amet, ne minimum perpetua est, in maiorum vulputate mea. Mei sint case ei, congue mentitum inciderint an ius. Mel ex invidunt phaedrum. Dico eirmod praesent mel cu,',
    };
  },
  methods: {
    login({ username, password }) {
      Auth.login({ username, password })
        .then((token) => {
          this.$store.dispatch('setToken', { token });
          this.$router.push('/');
        })
        .catch(err => console.log(`${err}`));
    },
    register({
      name, username, email, password,
    }) {
      Auth.register({
        name, username, email, password,
      }).then(() => {
        this.islogin = true;
      });
    },
  },
};
</script>

<style scoped>
.bkg{
    position: absolute;
    width: 60%;
    height: 100%;
    right: -35%;
    top: -15%;
    border: 100px solid;
    border-radius: 50%;
}

.fade-enter{

}
.fade-enter-active{
    animation: 0.3s fade-in ease-in;
}
.fade-leave{

}
.fade-leave-active{
    animation: 0.3s fade-out ease-out;
}

.img-enter{

}
.img-enter-active{
    animation: 0.3s img-in ease-in;
}
.img-leave{

}
.img-leave-active{
    animation: 0.3s img-out ease-out;
}

@keyframes fade-in{
     from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-out{
      from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
}

@keyframes img-in{
     from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes img-out{
      from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-20px);
    opacity: 0;
  }
}
</style>
