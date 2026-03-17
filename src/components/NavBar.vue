<script setup>
import {useRouter} from "vue-router";
import {useAuth} from '../services/auth'

const router = useRouter();
const { logout } = useAuth()

const log = localStorage.getItem( "authToken")
const isAdmin = true


</script>

<template>
    <v-app-bar color="#022D36">
        <router-link to="/">
            <v-app-bar-title>MacFit Gym</v-app-bar-title>
        </router-link>

        <v-btn to="/homepage" v-if="log">Home</v-btn>
        <v-btn to="/bundles">Bundles</v-btn>
        <v-btn to="/gym-locations">Our Gyms</v-btn>
        <v-btn to="/admin" v-if="isAdmin">Admin</v-btn>
        <v-btn icon="mdi-account" v-if="log">P
            <v-menu activator="parent">
                <v-list>
                    <v-list-item>
                        <v-btn color="primary" to="/profile">Profile</v-btn>                        
                    </v-list-item>
                    <v-list-item>
                        <v-btn color="primary" @click="logout()">Logout</v-btn>                        
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
        <v-btn to="/login"v-else>Login</v-btn>       
    </v-app-bar>

</template>