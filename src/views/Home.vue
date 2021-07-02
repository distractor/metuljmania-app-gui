<template>
  <div class="home">
    <div>
      <h1>Welcome to 2021!</h1>
      <div class="text">
        <strong>DJP Metulj Rimske Toplice</strong> decided to gravely simplify and speed up the registration procedure at paragliding competitions.
      </div>
      <div class="text">
        In the new age and with the rise of COVID-19 pandemic situation, many of you were forced to obtain a certified <strong>digital identity</strong>, which allows you to prove who you are online. With that same identity, you will now be able to complete the whole registration process from your home couch.
      </div>
      <b-jumbotron header="How does it work?" header-level=5>
        <ol>
          <li>
            <div>
              Simply find your application form by clicking the button below.
            </div>
            <div class="text">
              <b-button variant="primary" href="/application">Get my application</b-button>
            </div>
          </li>
          <li>Find your name and type in the password that was sent to you by email.</li>
          <li>Check and correct your data if necessary.</li>
          <li>
            <div>
              Once you submit, application form will be sent to your email. You can use your digital identity to sign it and upload it back using the button below.
            </div>
            <div class="text">
              <b-button variant="primary" href="/upload">Upload application</b-button>
            </div>
          </li>
        </ol>
      </b-jumbotron>
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
