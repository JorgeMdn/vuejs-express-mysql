<template>
  <v-content>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm8 md4>
          <v-card max-width="600">
            <v-card-title class="display-1 text-center" primary-title>SignIn</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-form @submit.prevent="signUp">
                  <v-text-field
                  name="fullname"
                  label="Fullname"
                  id="fullname"
                  v-model="user.fullname"
                ></v-text-field>
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
                <!-- BTN SUBMIT -->
                <v-btn type="submit" color="primary" block>SignUp</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => {
    return {
      user: {
        fullname: "",
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signUp: function() {
      console.log(this.user);
    }
  }
};
</script>