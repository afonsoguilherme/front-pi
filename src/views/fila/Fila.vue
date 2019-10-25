<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
    class="wrapper-content"
  >
    <v-layout wrap
      class="container-atendants-break">
      <v-flex
        xl12
        lg12
        md12
        sm12
        xs12
        class="container-cards"
        v-for="n in 4"
        :key="n"
      >
        <material-card
          color="grey darken-2"
        >
          <template>
            <div class="container-img"
              style="background: yellow;">
              <v-avatar>
                <img :src="logo">
              </v-avatar>
            </div>

            <p>Atendente 1 </p>

             <v-btn small
              color="primary"
              class="toolbar-items"
              to="/"
            >
              Voltar
            </v-btn>
          </template>
        </material-card>

      </v-flex>
    </v-layout>

    <div class="attendants-online-and-queue">    
      <div class="container-button">
        <v-btn
          color="primary"
          @click="overlay = !overlay"
          style="margin-bottom: 30px!important;"
        >
          Mais opções
        </v-btn>

        <v-overlay
          :absolute="absolute"
          :opacity="opacity"
          :value="overlay"
          :z-index="zIndex"
        >
          <div class="container-overlay">
            <v-btn
              color="primary"
              @click="overlay = false"
            >
              Priorizar
            </v-btn>

            <v-btn
              color="primary"
              @click="overlay = false"
            >
              Desabilitar
            </v-btn>

          </div>
        </v-overlay>
      </div>

      <v-sheet
        class="mx-auto"
      >
        <v-slide-group multiple show-arrows>
          <v-slide-item
            v-for="n in 10"
            :key="n"
            v-slot:default="{ active, toggle }"
          >

          <v-layout wrap
            class="container-wrapper-cards">
            <v-flex
              xl12
              lg2
              md2
              sm2
              xs12
              class="container-cards"
            >
              <material-card
                color="primary"
              >
                <template>
                  <div class="container-img"
                    style="left: 27px; background: orange;">
                    <v-avatar>
                      <img :src="logo">
                    </v-avatar>
                  </div>

                  <p>Atendente 2 </p>

                  <v-btn small
                    color="primary"
                    class="toolbar-items"
                    to="/"
                  >
                    Atender
                  </v-btn>
                </template>
              </material-card>

            </v-flex>
          </v-layout>
          
          </v-slide-item>
        </v-slide-group>
      </v-sheet>

      <v-layout wrap
        class="container-wrapper-arrow">
        <div class="container-arrow">
          <img :src="arrow">
        </div>
      </v-layout>

      <v-sheet
        class="mx-auto"
      >
        <v-slide-group multiple show-arrows>
          <v-slide-item
            v-for="n in 10"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <v-layout wrap
              class="container-wrapper-cards">
              <v-flex
                xl12
                lg2
                md2
                sm2
                xs12
                class="container-cards"
                v-for="n in 5"
                :key="n"
              >
                <material-card
                  color="primary"
                >
                  <template>
                    <div class="container-img"
                      style="left: 27px; background: #05cc05;">
                      <v-avatar>
                        <img :src="logo">
                      </v-avatar>
                    </div>

                    <p>Atendente 3 </p>

                    <v-btn small
                      color="primary"
                      class="toolbar-items"
                      to="/"
                    >
                      Finalizar
                    </v-btn>
                  </template>
                </material-card>
              </v-flex>
            </v-layout>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    logo: './img/funcionario.png',
    arrow: './img/arrow.png',
    dialog: false,
    dialog2: false,
    absolute: false,
    opacity: 0.46,
    overlay: false,
    zIndex: 5
  })
}
</script>
<style lang="scss">

</style>

<style scoped>
div > div.mx-auto.rotated.v-sheet.theme--light > div > div.v-slide-group__wrapper > div > div.layout.container-atendants-break.rotated.wrap {
  transform: rotate(270deg);
}

.rotated {
  transform: rotate(90deg);
}

.theme--light.v-sheet {
  background: transparent !important;
}
div.container-overlay {
  display: flex; flex-direction: column;
}

div.attendants-online-and-queue > div.mx-auto.v-sheet.theme--light {
  max-width: 882px;
}

div.attendants-online-and-queue > div.mx-auto.v-sheet.theme--light > div > div.v-slide-group__wrapper > div {
  padding: 29px 20px 4px;
}
.container.grid-list-xl :not(:only-child) .layout:first-child {
  margin-top: 0 !important;
}

.container.grid-list-xl :not(:only-child) .layout:last-child {
  margin-bottom: 0 !important;
}
.v-application { border: 2px solid red; }

div.wrapper-content {
  padding: 0!important;
}

div.container-wrapper-arrow {
  margin: 67px 0!important;
  display: flex;
  align-items: center;
  justify-content: center;
}

div.layout.container-wrapper-arrow.wrap > div > img {
  width: 50px;
  height: 50px;
}

div.container-button {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 10px;
}
#core-view > div > div.layout.container-atendants-break.wrap
div.attendants-online-and-queue > div.container-wrapper-cards,
div.layout.container-atendants-break.wrap {
  padding: 0;
  height: 100%;
  margin-bottom: 150px;
  /* # transform: rotate(270deg); */
}
div.attendants-online-and-queue > div.container-wrapper-cards {
  border: 2px solid orange;
  margin: 0 !important;
  align-items: center;
  justify-content: center;
  padding: 26px 0px !important;
}

div.v-application p {
  margin: 0 !important;
  text-align: center;
}

div.layout.container-atendants-break.wrap {
  width: 100%;
  max-width: 154px;
  overflow: hidden;
}

div.layout .wrap {
  margin: 0 !important;
}

div.attendants-online-and-queue div.container-cards {
  max-width: 140px;
}
div.attendants-online-and-queue > div:nth-child(2) > div.container-arrow {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 138px 0;
}

div.attendants-online-and-queue > div:nth-child(2) > div.container-arrow > img {
  width: 50px;
  height: 50px;
}

.container-atendants-break {
  flex-direction: column;
  margin: 0 !important;
  height: 100%;
  width: 100%;
  max-width: 141px;
}

div.mx-auto.rotated.v-sheet.theme--light > div > div.v-slide-group__wrapper > div {
  height: 146px;
}

.attendants-online-and-queue {
  display: flex;
  flex-direction: column;
  border-left: 2px solid #808080;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 5px;
  margin-left: 30px;
}

.container-cards {
  margin: 13px 8px 15px;
  max-width: 136px;
  padding-top: 29px!important;
}

div.container-cards div div.v-card__text {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 18px 5px 5px;
  background-color: #ffffff !important;
}

.v-card .v-offset .v-card--material__header.v-card {
    width: 68px;
    height: 68px;
    border-radius: 58px;
}

.v-application .container-img {
  position: absolute;
  float: left;
  top: -40px;
  left: 30px;
  border-radius: 60px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
}

div.v-avatar {
  margin: 0 !important;
}

.v-avatar img {
  width: 45px;
  height: 45px;
  border-radius: 22px;
}
</style>