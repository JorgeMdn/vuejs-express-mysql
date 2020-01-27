<template>
  <v-content>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm8 md4>
          <v-card max-width="600">
            <v-card-title class="display-1 text-center" primary-title>SignIn</v-card-title>
            <v-text-field
                  name="username"
                  label="Username"
                  id="username"
                  v-model="user.username"
                ></v-text-field>
            <v-card-text>
              <v-form @submit.prevent="signIn">
                <v-text-field
                  name="username"
                  label="Username"
                  id="username"
                  v-model="user.username"
                ></v-text-field>
                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  v-model="user.password"
                ></v-text-field>
                <v-btn type="submit" color="primary" block>SignIn</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
const API_URL = 'http://localhost:4000/signup'
export default {
  data: () => {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signIn: function() {
      console.log(this.user);
      axios.post(API_URL, { data: this.user})
    }
  }
};
</script>