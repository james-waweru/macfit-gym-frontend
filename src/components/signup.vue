<script setup>
  import { ref } from 'vue'

  const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => (`The email and password you entered don't match`),
  }

  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref(null)

  const show1confirm= ref(false)
  const confirmPassword = ref(null)

 

</script>

<template>
    <v-container width="50%" class="text-center mt-12" >
        <v-row>
            <v-col class="mb-12">
                <v-form>
                    <v-row>
                        <v-col md="12">
                            <v-icon color="#CFD0D6"  icon="mdi-weight-lifter" size="x-large" class="mt-8"></v-icon>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div class="text-title-large font-weght-medium">Sign Up</div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>First Name</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field> 

                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Last Name</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field> 
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>E-mail</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field> 

                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Phone</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" type="number"> 

                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Gender</div>
                        </v-col>
                        <v-col md="6">
                            <v-radio-group inline>
                                    <v-radio label="Male" value="male"></v-radio>
                                    <v-radio label="Female" value="female"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Date of Birth</div>
                        </v-col>
                        <v-col md="6">
                        <v-date-input variant="outlined"></v-date-input>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Gym Location</div>
                        </v-col>
                        <v-col md="6">
                            <v-select
                                label="Select"
                                :items="['', 'CBD','Madaraka', 'Westlands', 'Buruburu']"
                            ></v-select>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Password</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field 
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                variant="outlined"
                                label="Normal with hint text"
                                name="input-10-1"
                                >
                                
                            </v-text-field>
                        </v-col>
                    </v-row>

                                        <v-row>
                        <v-col md="6" class="text-title-large font-weght-medium text-right">
                            <div>Confirm Password</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field 
                                v-model="confirmPassword"
                                :append-icon="show1confirm ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1confirm ? 'text' : 'password'"
                                variant="outlined"
                                label="Normal with hint text"
                                name="input-10-1"
                                >
                                
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="12">
                            <v-btn color="#3A4B68" variant="elevated" width="50%">Log In</v-btn>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="12">
                            <div>New to MacFit? Create an Account</div>
                        </v-col>
                    </v-row>
                </v-form>

            </v-col>
        </v-row>

    </v-container>
</template>