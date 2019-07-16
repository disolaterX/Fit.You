<template>
  <div>
    <loggedinUser v-if="isAuthTrue == true"></loggedinUser>
    <registerNow v-else></registerNow>
  </div>
</template>
<script>
import loggedinUser from "./subviews/ManageProfile";
import registerNow from "./subviews/UserRegister";

export default {
  components: {
    loggedinUser,
    registerNow
  },
  computed: {
    isAuthTrue() {
      return this.$store.state.isAuth;
    }
  }
};
</script>

