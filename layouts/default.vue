<template>
    <v-app>
      <v-app-bar scroll-behavior="hide" scroll-threshold="300">
        <v-app-bar-title>
          <nuxt-link to="/" aria-label="Home">
            <div class="h-100 d-flex align-center justify-center" style="width: 150px;">
                <img src="~/assets/images/logo.webp"  
            style="height: 100px; width: 150px; object-fit: contain;" loading="eager"   
             alt="">
            </div>
           
          </nuxt-link>
        </v-app-bar-title>
        <template #append>
          <section class="d-flex align-center">
            <div>menus</div>
          </section>
        </template>
      </v-app-bar>
      <main>
        <slot />
      </main>
      <PrincipalFooter />
    </v-app>
  </template>
  

  <style>
    .Montserrat-font {
        font-family: "Montserrat", serif;
    }
</style>