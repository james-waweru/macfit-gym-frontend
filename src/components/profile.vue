<script setup>
const userDetails = JSON.parse(localStorage.getItem('userDetails'))


</script>

<template>
    <v-container width="50%" style="background-color:#CFD0D6" >
        <v-row>
            <v-col>
                <v-card>
                    <v-img src="" class="h-50" cover></v-img>
                    <v-card-title> {{ userDetails.name }}</v-card-title>
                    <v-card-text>{{ userDetails.email }}</v-card-text>
                    <v-card-text>{{ userDetails.gender }}</v-card-text>
                    <v-card-text>{{ userDetails.gymLocations}}</v-card-text>
                    <v-card-text>{{ userDetails.phone }}</v-card-text>
                    <v-card-text>{{ userDetails.subscription }}</v-card-text>
                    <div v-if="userDetails.Subscription">
                        <v-card-text>Your current subscription is: {{ userDetails.subscription }}</v-card-text>
                    </div>
                    <div v-else>
                        <v-btn color="primary" variant="tonal" to="/bundles" >Select A Bundle</v-btn>
                    </div>
                    <v-card-text>Your current subscription is{{ userDetails.subscription }} </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>