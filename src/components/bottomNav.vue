<template>
  <div height="200px">
    <v-bottom-nav :value="true" fixed>
      <v-btn @click="changeSelected(idx)" v-for="(item,idx) in bottomNavList" :key="idx">
        <span :style="item.style">{{item.title}}</span>
        <v-icon :color="item.color">{{item.icon}}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bottomNavList: [
        {
          notactive: "Home",
          icon: "home",
          color: "blue",
          route: "/"
        },
        {
          notactive: "Recipes",
          icon: "restaurant",
          color: "gray",
          route: "/"
        },
        {
          notactive: "Routine",
          icon: "fitness_center",
          color: "gray",
          route: "/"
        },
        {
          notactive: "Profile",
          icon: "person",
          color: "gray",
          route: "/profile"
        }
      ]
    };
  },
  created() {
    this.bottomNavList.forEach(e => {
      if (e.notactive == "Home") {
        e.title = e.notactive;
        e.color = "blue";
        e.style = "color : blue";
      }
    });
  },

  computed: {},
  methods: {
    changeSelected(idx) {
      // console.log(idx);
      this.bottomNavList.forEach(e => {
        if (e.style == "color : blue") {
          e.style = "";
          e.color = "gray";
          e.title = null;
        }
      });

      this.bottomNavList[idx].style = "color : blue";
      this.bottomNavList[idx].color = "blue";
      this.bottomNavList[idx].title = this.bottomNavList[idx].notactive;
      this.$router.push(this.bottomNavList[idx].route);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
