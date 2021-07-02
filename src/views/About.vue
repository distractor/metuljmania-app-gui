<template>
  <div class="about text">
    <h1>Motivation</h1>
    <div class="text">
      This application was developed to simplify <strong>registration procedure</strong> for paragliding cross country competitions.
    </div>
    <h1>Problem</h1>
    <h4>Too slow</h4>
    <div class="text">
      Registration procedure takes too much time. It is a slow process before
      <ul>
        <li>the registration office finds appropriate papers,</li>
        <li>each pilot checks and corrects his/hers data,</li>
        <li>many times pilots forget wallets/licences/insurance cards,</li>
        <li>...</li>
      </ul>
      It also quickly becomes messy when a lot of data is wrong.
    </div>
    <h4>Pandemic leftovers</h4>
    <div class="text">
      With the current pandemic situation it is also still not advised to keep a lot of people in a closed space.
    </div>
    <h1>Solution</h1>
    <div class="text">
      Move as much of registration procedure as possible online. For the implementation purposes backend and frontend projects were developed. Both are avaliable as open source projects licensed under MIT.
      <ul>
        <li>API is developed using the .NET framework, sources avaliable at <a href="https://github.com/distractor/metuljmania-application">github repository <b-icon-github></b-icon-github></a> and</li>
        <li>frontend is developed using Vue + Typescript with bootstrap-vue framework, sources available at <a href="https://github.com/distractor/metuljmania-application-gui">github repository <b-icon-github></b-icon-github></a>.</li>
      </ul>
      Feel free to further develop any of the projects.
      <div class="text">
        <h2>Authors</h2>
        <div class="text">
          <ul>
            <li>Mitja Jančič
              <a href="mailto:mitjajancic@gmail.com">
                <b-icon-envelope></b-icon-envelope>
              </a>
              <a href="https://github.com/distractor">
                <b-icon-github></b-icon-github>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
a {
  padding-left: 3px;
}
</style>
