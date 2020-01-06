<template>
    <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="16"
            sm="8"
            md="4"
          >

            <v-alert 
                type="error"
                :value="isLoginError"
            >
                Check Email & Password please.
            </v-alert>
            <v-alert 
                type="success"
                :value="isLogin"
            >
                Login is successful.
            </v-alert>
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-email-outline"
                    type="text"
                  />
                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock-outline"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn 
                    color="primary"
                    rounded
                    block
                    large
                    @click="login({
                        email: email,
                        password: password
                    })"
                >
                    Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
    name: "login",
    data() {
        return {
            email: null,
            password: null,
        }
    },
    computed: {
        ...mapState(['isLogin', 'isLoginError'])
    },
    methods: {
        ...mapActions(['login']),
    }
}
</script>