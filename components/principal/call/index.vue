<template>
    <div style="min-height: 600px;" class="d-flex justify-center align-center bg-grey-lighten-4 py-16">
        <v-container>
        <v-row>
            <v-col cols="6">
                <h1 class="text-h3">Previna Custos Altos</h1>
                <p class="my-10 text-body-1">Está buscando reduzir custos de correção e aumentar a eficiência dos seus ativos industriais? 
                    Preencha o formulário e descubra como a manutenção condicionada a inspeção pode proteger seus ativos e 
                    otimizar sua produção. Nossa equipe de especialistas está pronta para criar um plano personalizado 
                    que atenda às necessidades específicas dos seus ativos industriais.</p>
                <v-list class="bg-transparent">
                    <v-list-item prepend-icon="mdi-shield-check-outline">Prevenção de falhas e paradas não programadas</v-list-item>
                    <v-list-item prepend-icon="mdi-trending-down">Redução significativa de custos de correção</v-list-item>
                    <v-list-item prepend-icon="mdi-account-hard-hat-outline">Equipe especializada em diversos setores industriais</v-list-item>
                    <v-list-item prepend-icon="mdi-trending-up">Aumento da eficiência e vida útil dos equipamentos</v-list-item>
                    <v-list-item prepend-icon="mdi-clock-time-four-outline">Planejamento personalizado de manutenção</v-list-item>
                </v-list>
            </v-col>
            <v-col cols="6">
                <h2 class="text-h6 mb-8">Fale Conosco</h2>
                <form>
                    <v-text-field label="Seu nome *"></v-text-field>
                    <v-text-field label="Seu e-mail *"></v-text-field>
                    <v-text-field label="Celular *"></v-text-field>
                    <v-text-field label="whatsapp"></v-text-field>
                    <v-textarea label="Descreva se precisar nos detalhar mais informações"></v-textarea>
                    <v-btn block color="red" variant="outlined">enviar</v-btn>
                </form>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>