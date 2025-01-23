<template>
   <footer class="bg-blue-grey-darken-4 " style="min-height: 200px;">
    <v-container>   
    <div class="py-16 ">
        <v-row>
            <v-col cols="3" class="">
                <div>
                    <img src="/assets/images/logo.webp" alt="" style=" width: 200px;">
                </div>

                <p class="mt-16">Transformando a indústria com soluções inovadoras há 30 anos.</p>
            </v-col>
            <v-col cols="4" class="">
                <h1 class="text-h6 font-weight-black">Links Rápidos</h1>
                <v-list class="bg-transparent">
                    <v-list-item variant="plain" to="/">Sobre Nós</v-list-item>
                    <v-list-item variant="plain" to="/">Serviços de Engenharia de manutenção & Confiabilidade</v-list-item>
                    <v-list-item variant="plain" to="/">Serviços Técnicos de Inspeção</v-list-item>
                    <v-list-item variant="plain" to="/">Sistema Inteligente de Intervênção Industrial</v-list-item>
                    <v-list-item variant="plain" to="/">Sistema Fixo de  Termografia</v-list-item>
                    <v-list-item variant="plain" to="/" prepend-icon="mdi-account-multiple-outline">Solicite Consultoria</v-list-item>
                </v-list>
            </v-col>
            <v-col cols="3" class="">
                <h1 class="text-h6 font-weight-black">Contato</h1>

                <v-list class="bg-transparent">
                    <v-list-item prepend-icon="mdi-email-fast-outline">contato@pred.com.br</v-list-item>
                    <v-list-item prepend-icon="mdi-map-marker-radius">R. Italina Pereira Mota, 440 - Jardim Camburi, Vitória - ES, 29090-370</v-list-item>
                    <v-list-item prepend-icon="mdi-phone-dial-outline"> +55 27 3337-5977</v-list-item>
                </v-list>

            </v-col>
            <v-col cols="2" class="">
                <h1 class="text-h6 font-weight-black mb-10">Conecte-se conosco nas redes sociais</h1>
                <nuxt-link
                    v-for="(social, i) in socias"
                    :key="i"
                    :to="social.to"
                    target="_blank"
                    class="mx-2"
                    aria-label="Link to {{ social.icon }}"
                    >
                    <v-icon :icon="social.icon" color="white" size="small"></v-icon>
                </nuxt-link>
            </v-col>
        </v-row>
    </div>

    <hr>
    <div class="text-center mt-2">
        © {{ new Date().getFullYear() }} — <strong>PRED ENGENHARIA. Todos os direitos reservados</strong>
    </div>
</v-container>
   </footer>
</template>



<script setup>
const socias = [
  { icon: 'mdi-linkedin', to: 'https://www.linkedin.com/company/pred-engenharia/' },
  { icon: 'mdi-youtube', to: 'https://www.youtube.com/@predengenharia3567' },
  { icon: 'mdi-instagram', to: 'https://www.instagram.com/predengenharia/' },
  { icon: 'mdi-facebook', to: 'https://www.facebook.com/PredEngenharia/' }
];
</script>