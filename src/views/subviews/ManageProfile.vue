<template>
  <div>
    <p>Logind User</p>
    <a @click="()=>{this.$store.dispatch('logout')}">logout</a>
  </div>
</template>
