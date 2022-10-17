<template>
  <div id="app">
    <ul class="nav nav-pills container pt-2">
      <li class="nav-item">
        <router-link to="/" exact exact-active-class="active" class="nav-link">
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">
          About
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import './scss/app.scss'
</script>