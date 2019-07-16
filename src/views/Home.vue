<template>
  <div id="home" class="column">
    <div id="homeSvg">
      <img src="../assets/svg/homeSvg.svg" />
    </div>
    <div id="homeContent" class="column">
      <p>
        <span>Hello ,&nbsp;</span>
        <a v-if="!this.$store.state.isAuth">Stranger</a>
        <a v-else>{{this.$store.state.cUser.displayName}}</a>
      </p>
      <p>
        We here at Fit.You provide you the best diet free of cost that is
        specifically made for you.
      </p>
    </div>
    <div id="homeButton">
      <button type="button center" class="btnHome" @click="()=>{this.$router.push('/chatform')}">
        <img src="../assets/svg/createNew.svg" />
        Get New
      </button>
      <button type="button center" class="btnHome">
        <img src="../assets/svg/showOld.svg" />
        Show Old
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.column {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

#homeSvg {
  display: flex;
  justify-content: center;
}

#homeSvg img {
  width: 70%;
}

#homeContent {
  padding: 25px;
}
#homeContent p {
  display: flex;
  justify-content: center;
}

#homeContent span {
  font-weight: bold;
}

#homeButton {
  display: flex;
  justify-content: space-evenly;
}
#homeButton img {
  width: 7em;
  height: 7em;
  padding: 5px;
}

.btnHome {
  display: flex;
  flex-flow: column;
  border: 1px solid silver;
  border-radius: 5px;
}

.center {
  justify-content: center;
  align-items: center;
}

/* .MuiButton-outlined {
  width: 100px;
  height: 125px;
  padding: 5px 5px !important;
}

.MuiButton-label {
  font-size: 12px;
  display: flex !important;
  flex-flow: column !important;
}

.MuiButton-label img {
  width: 100%;
  padding-bottom: 15px;
} */

#home {
  height: 91.5vh;
  overflow: scroll;
}
</style>

