<template>
  <div class="col">
    <span>Login with Social Media</span>
    <img src="../../assets/svg/login_signup.svg" />
    <a
      @click="()=>{this.$store.dispatch('loginGoogle')}"
      href="#"
      class="google btn"
    >Login with Google+</a>
    <a
      @click="()=>{this.$store.dispatch('loginFacebook')}"
      href="#"
      class="fb btn"
    >Login with Facebook</a>
  </div>
</template>
<style scoped>
.col {
  display: flex;
  flex-flow: column;
  height: 91.5vh;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col img {
  width: 65%;
  text-align: center;
  margin: 10% auto;
}
.col span {
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 30px;
}
.btn {
  width: 65%;
  border: none;
  border-radius: 4px;
  margin: 10px auto;
  opacity: 0.85;
  font-size: 17px;
  line-height: 20px;
  padding: 15px;
  text-decoration: none; /* remove underline from anchors */
}
.fb {
  background-color: #3b5998;
  color: white;
}

.twitter {
  background-color: #55acee;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}
</style>

