<script setup>


</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-carousel>
                <v-carousel-item src="/Gym.jpg" cover></v-carousel-item>
                <v-carousel-item src="/Gym 2.jpg" cover></v-carousel-item>
                <v-carousel-item src="/risen-wang-20jX9b35r_M-unsplash.jpg" cover></v-carousel-item>
            </v-carousel>
        </v-row>
    </v-container>
        <!--About Us-->
    <v-container style="background-color:#CFD0D6" max-width="100%">
        <v-row>
            <v-col md="8" class="text-center">
                <div class="text-display-medium mb-12">About Us</div>
                <div class="text-title-large text-medium-emphasis mb-8">At our fitness community, we believe that health is more than just a workout routine—it’s a lifestyle. Our mission is to empower individuals of all ages and fitness levels to discover their strength, build confidence, and embrace sustainable habits that lead to long-term wellness. Whether you’re stepping into the gym for the first time or you’re an experienced athlete, we provide the guidance, support, and environment you need to thrive.</div>
                <div class="text-title-large text-medium-emphasis mb-8">We pride ourselves on offering a diverse range of programs designed to meet your unique goals. From high-energy group classes and personalized training sessions to holistic approaches that incorporate nutrition and recovery, our team is committed to helping you achieve balance. Every member of our staff is passionate about fitness and dedicated to creating a welcoming space where progress is celebrated and challenges are embraced.</div>
                <div class="text-title-large text-medium-emphasis mb-8">Beyond physical training, we foster a sense of community that keeps you motivated and inspired. Our philosophy is simple: fitness should be fun, inclusive, and transformative. By joining us, you’re not just signing up for workouts—you’re becoming part of a supportive network that values growth, resilience, and well-being. Together, we’ll help you unlock your potential and make fitness a rewarding part of your everyday life.</div>
                <v-btn color="#022D36">Learn More</v-btn>
            </v-col>

            <v-col background-color="" md="2">
                <v-container class="d-flex align-center justify-center fill-height">
                    <v-img src="/Aesthetic gym.jpg" cover></v-img> 
                </v-container>
            </v-col>
        </v-row>
        </v-container>
    <v-container>
        <v-row>

            <v-col md="4">
                <v-card>
                    <v-img src="/gymify.jpg" cover></v-img>
                    <v-card-title>Another Gym lol</v-card-title>
                    <v-card-text>Tuko kwa Gym</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
            
            <v-col md="4">
                <v-card>
                    <v-img src="/Gym 3 (5).jpg" cover></v-img>
                    <v-card-title>Another Gym lol</v-card-title>
                    <v-card-text>Tuko kwa Gym</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>

            <v-col md="4">
                <v-card>
                    <v-img src="/Gym 3 (4).jpg" cover></v-img>
                    <v-card-title>Another Gym lol</v-card-title>
                    <v-card-text>Tuko kwa Gym</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>

        </v-row>
    </v-container>

    <!-- Reviews -->

    <v-container>
        <v-row>
            <v-col md="3">
                <v-card color="#cfd0d6">
                    <v-card-text>MacFit is the best gym ever! Loved the experience</v-card-text>
                        <v-rating :length="5" :size="32" :model-value="3" active-color="primary" >
                        </v-rating>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card color="#cfd0d6">
                    <v-card-text>Had an average experience but all on all, good gym.</v-card-text>
                        <v-rating :length="5" :size="32" :model-value="5" active-color="primary" >
                        </v-rating>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card color="#cfd0d6">
                    <v-card-text>I had a horrid experience at MacFit. Outdated equipments and poor customer service. #neveragain </v-card-text>
                        <v-rating :length="5" :size="32" :model-value="3" active-color="primary" >
                        </v-rating>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card color="#cfd0d6">
                    <v-card-text>I had a horrid experience at MacFit. Outdated equipments and poor customer service. #neveragain </v-card-text>
                        <v-rating :length="5" :size="32" :model-value="1" active-color="primary" >
                        </v-rating>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

<!--Contact Us-->
<v-container style="background-color:#CFD0D6" max-width="100%">
    <v-row class="align-center">
        <div class="text-title-large text-medium-emphasis mb-8" > Contact Us</div>
        <div class="text-title-large text-medium-emphasis mb-8" > Phone: 0703 034 000. | Email: info@strathmore.edu.</div>
        <div class="text-title-large text-medium-emphasis mb-8" > Opening Hours</div>
        <div class="text-title-large text-medium-emphasis mb-8" > Monday–Friday, 8:00 am – 5:00 pm (EAT).</div>
        <div class="text-title-large text-medium-emphasis mb-8" > Madaraka Estate, Ole Sangale Road, Nairobi, Kenya.</div>
        <div class="text-title-large text-medium-emphasis mb-8" ></div>
    </v-row>
</v-container>



</template>