<template>
    <div style="min-height: 800px;" class="w-100 bg-historia">
      <div style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(108, 122, 137, .8));" class="pb-16">
        <v-container>

        <h1 class="text-h3 text-center w-100 mb-10 mt-16 text-white">NOSSA HISTÓRIA</h1>
          <v-timeline >
            <v-timeline-item
              dot-color="red-lighten-2"
              icon="mdi-account-hard-hat"
              fill-dot
            >
              <v-card class="elevation-16">
                <v-card-title class="text-h3 mb-4 text-red-lighten-2">
                  1993
                </v-card-title>
                <v-card-text class="bg-white text--primary">
                  <p>Atuando na Industria e Área de serviços</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>


            <v-timeline-item
              dot-color="green-lighten-1"
              icon="mdi-cellphone-cog"
              fill-dot
            >
              <v-card class="elevation-16">
                  <v-card-title class="text-h3 mb-4 text-green-lighten-1">
                  1996
                </v-card-title>
                <v-card-text class="bg-white text--primary">
                  <p>Utilizando Mobilidade Corporativa, Rastreavél e Inteligente</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>


            <v-timeline-item
              dot-color="purple-lighten-2"
              icon="mdi-cellphone-wireless"
              fill-dot
            >
              <v-card class="elevation-16">
                  <v-card-title class="text-h3 mb-4 text-purple-lighten-2">
                  2002
                </v-card-title>
                <v-card-text class="bg-white text--primary">
                  <p>Usando Mobilidade Corporativa Integrada a ERP, com 10 mil Rotas Diárias de Inspeção e 3mil Usuários (Parceiro ZEBRA - MOTOROLA SOLUTION)</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>

            <v-timeline-item
              dot-color="indigo-lighten-2"
              icon="mdi-web"
              fill-dot
            >
              <v-card class="elevation-16">
                  <v-card-title class="text-h3 mb-4 text-indigo-lighten-2">
                  2006
                </v-card-title>
                <v-card-text class="bg-white text--primary">
                  <p>Atuando como Integrador de Soluções de Automação em Processos Térmicos (Parceiro AUTOMATION TECHNOLOGY DA ALEMANHA)</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>


            <v-timeline-item
              dot-color="indigo-darken-4"
              icon="mdi-car-cruise-control"
              fill-dot
            >
              <v-card class="elevation-16">
                  <v-card-title class="text-h3 mb-4 text-indigo-darken-4">
                  2018
                </v-card-title>
                <v-card-text class="bg-white text--primary">
                  <p>Possui 23 Registros de Marcas e Propriedades e um Modelo Inovador para Operacionalização da Gestão de Ativos (MCI)</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
      </v-container>
    </div>
  </div>
</template>

<style>
    .bg-historia{
        background-image: url("~/assets/images/30anos.webp");
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
    }
</style>