<template>
  <div
    id="app"
    class="fundoFila">
    <v-app id="inspire">
      <v-container
        fill-height
        fluid
        grid-list-xl
      >
        <v-flex xs3>
          <template>
            <v-container
              id="scroll-target"
              style="max-height: 400px; max-width: 200px"
              class="overflow-y-auto"
            >
              <v-row
                v-scroll:#scroll-target="onScroll"
                align="center"
                justify="center"
                style="height: 100%"
              >
                <div
                  v-for="(ausencia) in filaAusencia"
                  :key="ausencia.idVendedorEmAusencia"
                >
                  <material-card
                    v-bind="$attrs"
                    class="v-card--material-stats"
                    style="background-color: #FFFFFF; width: 130px; top: 0 !important;"
                    v-on="$listeners"
                  >
                    <v-card
                      color="orange"
                      class="cardFila"
                    >
                      <v-avatar
                        size="70"
                        class="cardAvatar"
                      >
                        <img :src="logo">
                      </v-avatar>
                    </v-card>
                    <p class="cardText">{{ ausencia.vendedor.nomeVendedor }}</p>
                    <v-btn
                      small
                      color="orange"
                      style="margin: auto; display: block;"
                      @click="fimAusencia(ausencia.vendedor.idVendedor)"
                    >
                      Finalizar
                    </v-btn>
                  </material-card>
                  <br>
                </div>
              </v-row>
            </v-container>
          </template>
        </v-flex>
        <v-flex xs9>
          <v-layout wrap>
            <v-flex xs12>
              <v-sheet
                class="mx-auto"
                max-width="100%"
                color="grey darken-2"
              >
                <v-slide-group
                  multiple
                  show-arrows>
                  <v-slide-item
                    v-for="(espera, i) in filaEspera"
                    :key="espera.idVendedorEmEspera"
                  >
                    <v-flex
                      sm6
                      xs12
                      md6
                      lg3
                    >
                      <div v-if="i === 0">
                        <material-card
                          v-bind="$attrs"
                          class="v-card--material-stats"
                          style="background-color: #BBDEFB; width: 130px"
                          v-on="$listeners"
                        >
                          <v-card
                            color="primary"
                            class="cardFila"
                          >
                            <v-avatar
                              size="70"
                              class="cardAvatar"
                            >
                              <img :src="logo">
                            </v-avatar>
                          </v-card>
                          <p class="cardText">{{ espera.vendedor.nomeVendedor }}</p>
                          <v-btn
                            small
                            color="grey darken-2"
                            style="margin: auto; display: block;"
                            @click="openModalAcoes(espera.vendedor.nomeVendedor, espera.vendedor.idVendedor, i)"
                          >
                            Ações
                          </v-btn>
                        </material-card>
                      </div>
                      <div v-else>
                        <material-card
                          v-bind="$attrs"
                          class="v-card--material-stats"
                          style="background-color: #FFFFFF; width: 130px"
                          v-on="$listeners"
                        >
                          <v-card
                            color="primary"
                            class="cardFila"
                          >
                            <v-avatar
                              size="70"
                              class="cardAvatar"
                            >
                              <img :src="logo">
                            </v-avatar>
                          </v-card>
                          <p  class="cardText">{{ espera.vendedor.nomeVendedor }}</p>
                          <v-btn
                            small
                            color="grey darken-2"
                            style="margin: auto; display: block;"
                            @click="openModalAcoes(espera.vendedor.nomeVendedor, espera.vendedor.idVendedor)"
                          >
                            Ações
                          </v-btn>
                        </material-card>
                      </div>
                    </v-flex>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
            </v-flex>
            <v-flex xs12>
              <v-sheet
                class="mx-auto"
                max-width="100%"
                color="grey darken-2"
              >
                <v-slide-group
                  multiple
                  show-arrows>
                  <v-slide-item
                    v-for="atendimento in filaAtendimento"
                    :key="atendimento.idVendedorEmAtendimento"
                  >
                    <v-flex
                      sm6
                      xs12
                      md6
                      lg3
                    >
                      <material-card
                        v-bind="$attrs"
                        class="v-card--material-stats"
                        style="width: 130px"
                        v-on="$listeners"
                      >
                        <v-card
                          color="success"
                          style="margin: auto; display: block; width: 80px; height: 80px; margin-top:-40px;"
                        >
                          <v-avatar
                            size="70"
                            style="margin: auto; display: block; padding-top: 5px;"
                          >
                            <img :src="logo">
                          </v-avatar>
                        </v-card>
                        <p class="cardText">{{ atendimento.vendedor.nomeVendedor }}</p>
                        <v-btn
                          small
                          color="success"
                          style="margin: auto; display: block;"
                          @click="fimAtendimento(atendimento.vendedor.idVendedor)"
                        >
                          Finalizar
                        </v-btn>
                      </material-card>
                    </v-flex>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-dialog
          v-model="modalAcoes"
          max-width="400"
        >
          <v-card>
            <v-card-title class="headline">Escolher ação:</v-card-title>
            <v-card-actions>
              <div v-if="contador === 0">
                <v-btn
                  color="success"
                  @click="inicioAtendimento(idVendedor)"
                >
                  Iniciar atendimento
                </v-btn>
                <v-btn
                  color="warning"
                  @click="inicioAusencia(idVendedor)"
                >
                  Ausencia
                </v-btn>
              </div>
              <div v-else>
                <v-btn
                  color="success"
                  @click="inicioAtendimento(idVendedor)"
                >
                  Priorizar atendimento
                </v-btn>
                <v-btn
                  color="warning"
                  @click="inicioAusencia(idVendedor)"
                >
                  Ausencia
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      idVendedor: '',
      nomeVendedor: '',
      codigoVendedor: '',
      imagemVendedor: '',
      contador: '',
      logo: './img/icon.jpg',
      modalAcoes: false,
      inheritAttrs: false,
      offsetTop: 0
    }
  },
  computed: {
    ...mapState({
      filaAtendimento: state => state.filaAtendimento.all.items,
      mensagem: state => state.filaAtendimento.status
    }),
    ...mapState({
      filaEspera: state => state.filaEspera.all.items,
      mensagem: state => state.filaAtendimento.status
    }),
    ...mapState({
      filaAusencia: state => state.filaAusencia.all.items,
      mensagem: state => state.filaAtendimento.status
    })
  },
  created () {
    this.getAllAtendimento()
    this.getAllEspera()
    this.getAllAusencia()
  },
  methods: {
    ...mapActions('filaEspera', {
      getAllEspera: 'getAll',
      iniciarAtendimento: 'iniciarAtendimento',
      iniciarAusencia: 'iniciarAusencia'
    }),
    ...mapActions('filaAtendimento', {
      getAllAtendimento: 'getAll',
      finalizarAtendimento: 'finalizarAtendimento'
    }),
    ...mapActions('filaAusencia', {
      getAllAusencia: 'getAll',
      finalizarAusencia: 'finalizarAusencia'
    }),
    openModalAcoes (nome, id, i) {
      this.nomeVendedor = nome
      this.idVendedor = id
      this.contador = i
      this.modalAcoes = true
    },
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    },
    inicioAtendimento (idVendedor) {
      this.iniciarAtendimento(idVendedor)
      this.modalAcoes = false
    },
    fimAtendimento (idVendedor) {
      this.finalizarAtendimento(idVendedor)
    },
    inicioAusencia (idVendedor) {
      this.iniciarAusencia(idVendedor)
      this.modalAcoes = false
    },
    fimAusencia (idVendedor) {
      this.finalizarAusencia(idVendedor)
    }
  }
}
</script>
