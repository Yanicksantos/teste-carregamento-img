<template>
    <div class="d-flex justify-end align-center text-white position-relative" style="background: linear-gradient(to right, #9E9E9E,#9E9E9E,#2563eb, #1e3a8a); min-height: 500px;">
        <v-container>
            <!-- Content -->
            <v-row>
                <!-- Left Section -->
                <v-col cols="12" md="7">
                <h2 class="text-h2 text-md-h3 mb-16">NOSSA VISÃO</h2>
                <p class="text-body-1 mb-10">
                  A PRED ENGENHARIA visa atender às necessidades das indústrias, na área de manutenção preditiva 
                  industrial, através de prestação de serviços e consultorias. Atua também na pesquisa e 
                  desenvolvimento de dispositivos, equipamentos e sistemas voltados para área de manutenção preditiva, 
                  instrumentação e controle.
                </p>
                <v-row dense>
                    <v-btn
                    color="white"
                    class="text-blue-600 me-4"
                    variant="outlined"
                    >
                    Conheça Nossa Missão
                    </v-btn>
                    <v-btn
                    color="white"
                    class="me-4"
                    >
                    Nossos Valores
                    </v-btn>
                </v-row>
                </v-col>
        
                <!-- Right Section with Animation -->
                <v-col cols="12" md="5">
                <div class="position-relative text-end">
                    <!-- Blobs -->
                    <div
                    class="position-absolute rounded-circle"
                    style="width: 20rem; height: 20rem; background: #60a5fa; opacity: 0.1;"
                    :style="blobStyle(0)"
                    ></div>
                    <div
                    class="position-absolute rounded-circle"
                    style="width: 10rem; height: 10rem; background: #60a5fa; opacity: 0.2;"
                    :style="blobStyle(2)"
                    ></div>
                    <div
                    class="position-absolute rounded-circle"
                    style="width: 8rem; height: 8rem; background: #DD2C00; opacity: 0.7;"
                    :style="blobStyle(4)"
                    ></div>
                    <div
                    class="position-absolute rounded-circle"
                    style="width: 15rem; height: 15rem; background: #60a5fa; opacity: 0.5;"
                    :style="blobStyle(6)"
                    ></div>


                </div>
                </v-col>
            </v-row>
            </v-container>
    </div>
  </template>
  
  <script setup>
  // Computed styles for animated blobs
  const blobStyle = (delay) => ({
    animation: `blob 7s infinite`,
    animationDelay: `${delay}s`,
    top: '50px',
    right: `100px`,
  });
  </script>
  
  <style>


  @keyframes blob {
    0%,
    100% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }
  
  .position-relative {
    position: relative;
  }
  
  .position-absolute {
    position: absolute;
  }
  
  .rounded-circle {
    border-radius: 50%;
  }
  
  .py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  .py-md-20 {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  
  .text-white {
    color: white;
  }
  
  .text-blue-600 {
    color: #2563eb;
  }
  
  .me-4 {
    margin-right: 1rem;
  }
  </style>
  