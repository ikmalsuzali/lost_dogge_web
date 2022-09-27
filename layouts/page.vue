<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <NavBar />
      </slot>
      <div>
          <slot />
      </div>
      <slot name="footer">
        <Footer />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>

<script setup>
import Footer from '~~/components/Footer.vue';
import NavBar from '~~/components/NavBar.vue';

</script>
