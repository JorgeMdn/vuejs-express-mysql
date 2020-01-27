<template>
  <v-app-bar app color="primary" dark>
    <template class="d-flex align-center">
      <v-btn text>
        <router-link to="/" tag="span" style="cursor: pointer title">Favorite Links</router-link>
      </v-btn>
    </template>

    <v-spacer></v-spacer>
    <template v-if="autenticado">
      <v-btn text>
        <router-link to="/" tag="span" style="cursor: pointer">Home</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/links" tag="span" style="cursor: pointer">Link list</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/links/add" tag="span" style="cursor: pointer">Add link</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/loggout" tag="span" style="cursor: pointer">Loggout</router-link>
      </v-btn>
    </template>

    <template v-else>
      <v-btn text>
        <router-link to="/signin" tag="span" style="cursor: pointer">SignIn</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/signup" tag="span" style="cursor: pointer">SignUp</router-link>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      autenticado: true
    };
  }
};
</script>