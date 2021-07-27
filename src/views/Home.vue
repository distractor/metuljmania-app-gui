<template>
  <div class="home">
    <div>
      <h1>Welcome to 2021!</h1>
      <div class="text">
        <strong>DJP Metulj Rimske Toplice</strong> decided to gravely simplify and speed up the registration procedure at paragliding competitions.
      </div>
      <div class="text">
        In the new age and with the rise of COVID-19 pandemic situation, many of you were forced to obtain a certified <strong>digital identity</strong>, which allows you to prove who you are online. With that same certificate, you will now be able to complete the whole registration process from your home couch.
      </div>
      <h1>How does it work?</h1>
      <ol>
        <li>
          <div>
            Simply find your application form by clicking the button below.
          </div>
          <div class="text">
            <b-button variant="primary" href="/application">Register</b-button>
          </div>
        </li>
        <li>Find your name and type in the password that was sent to you by email to reveal personal information.</li>
        <li>Check and correct your data if necessary.</li>
        <li>Submit and registration form will be sent to your email address.</li>
        <li>
          <div>
            You can use your digital identity to sign it and upload it back using the button below.
          </div>
          <div class="text">
            <b-button variant="primary" href="/upload">Upload form</b-button>
          </div>
        </li>
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
