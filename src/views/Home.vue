<template>
  <div class="home">
    <div>
      <h1>Welcome to 2021!</h1>
      <div class="text">
        <strong>DJP Metulj Rimske Toplice</strong> decided to simplify and speed up the registration procedure at paragliding competitions.
      </div>
      <h1>How does it work?</h1>
      <ol>
        <li>
          <div>
            Simply generate your registration form by clicking the button below.
          </div>
          <div class="text">
            <b-button variant="primary" href="/application">Register</b-button>
          </div>
        </li>
        <li>Find your name and type in the password that was sent to you by email to reveal personal information.</li>
        <li>Check and correct your data if necessary.</li>
        <li>You are strongly encouraged to upload the neccessary files (e.g. licence, ippi card and proof of airworthiness). Otherwise, you will have to show them on the spot.</li>
        <li>Click submit button and registration form will be generated and sent to your email address.</li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue { }
</script>
