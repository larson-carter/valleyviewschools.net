<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/administration">Administration</router-link> |
    <router-link to="/schools">Schools</router-link> |
    <router-link to="/departments">Departments</router-link> |
    <router-link to="/resources">Resources</router-link> |
    <router-link to="/state-required-information">State Required Information</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/search">Search</router-link> |
    <router-link to="/calendar">Calendar</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
