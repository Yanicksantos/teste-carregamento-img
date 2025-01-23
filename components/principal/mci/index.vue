<template>
    <div class="bg-mci-principal pb-16" style="min-height: 800px;">
        <v-container>
        <div>
          <img src="/assets/images/2.webp" alt="MCI" style="width: 300px; object-fit: cover;"/>
          <div>
            <p class="text-h5 text-uppercase w-50 text-grey-lighten-1 montserrat-font">
              {{ $t('mci_titile1') }}
              <span class="text-white Roboto-font font-weight-black">{{ $t('mci_titile2') }}<br>{{ $t('mci_titile3') }}</span>
              {{ $t('mci_titile4') }}
            </p>
          </div>
          <div style="border: 10px solid white; width: 750px; height: 420px;" class="d-flex justify-center align-center pa-3 mt-10">
            <img :src="`/${$t('mci_image1')}`" alt="MCI Image 1" style="height: 100%; width: 100%; object-fit: cover;" class="elevation-16"/>
          </div>
          <div class="my-4">
            <p class="text-grey-lighten-1 montserrat-font" style="width: 750px;">
              {{ $t('mci_description1') }}
              <span style="position: relative;" class="mr-2">
                MCI<span class="text-caption" style="position: absolute; top: -5px;">®</span>
              </span>
              {{ $t('mci_description2') }}
              <span style="position: relative;" class="mr-2">
                MCI<span class="text-caption" style="position: absolute; top: -5px;">®</span>
              </span>
              {{ $t('mci_description3') }}
            </p>
          </div>
          <v-btn
            append-icon="mdi-arrow-top-right"
            variant="flat"
            color="#B71C1C"
            to="/mci"
            class="text-caption"
          >
            {{ $t('mci_learn_more') }}
          </v-btn>
        </div>
      </v-container>
    </div>
</template>

<style>
    .bg-mci-principal{
        background-image: url("~/assets/images/bg-mci-principal.webp");
        background-size: cover;
    }
</style>