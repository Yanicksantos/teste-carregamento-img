<template>
    <div style="min-height: 500px;" class="bg-blue-grey-darken-4 py-10">
        <v-container>        
            <v-row>
                <v-col cols="6">
                    <h1 class="text-h3 mb-10">Por que escolher a PRED Engenharia?</h1>
                    <p class="pr-8">Com 30 anos de experiência, oferecemos soluções personalizadas que combinam expertise técnica, inovação tecnológica e um profundo entendimento das necessidades da indústria moderna.</p>
                    <v-list class="bg-transparent pl-8 my-8">
                        <v-list-item prepend-icon="mdi-check">Equipe altamente qualificada e experiente</v-list-item>
                        <v-list-item prepend-icon="mdi-check">Soluções tecnológicas de ponta</v-list-item>
                        <v-list-item prepend-icon="mdi-check">Compromisso com resultados mensuráveis</v-list-item>
                        <v-list-item prepend-icon="mdi-check">Atendimento personalizado e suporte contínuo</v-list-item>
                    </v-list>
                    <v-btn append-icon="mdi-account-multiple-outline">Solicita uma consultoria</v-btn>
                </v-col>

                <v-col cols="6" >
                    <div class="h-100 w-100 bg-motivos">
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style>
    .bg-motivos{
        background-image: url("~/assets/images/bg-motivos.webp");
        background-size: contain;
        background-position: right;
    }
</style>