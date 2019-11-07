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
                      <div v-if="ausencia.vendedor.imagemVendedor === ''">
                        <v-avatar
                          size="70"
                          class="cardAvatar"
                        >
                          <img
                            :src="iconImage"
                            width="auto"
                          >
                        </v-avatar>
                      </div>
                      <div v-else>
                        <v-avatar
                          size="70"
                          class="cardAvatar"
                        >
                          <img
                            :src="ausencia.vendedor.imagemVendedor"
                            width="auto"
                          >
                        </v-avatar>
                      </div>
                    </v-card>
                    <p class="cardText">{{ ausencia.vendedor.nomeVendedor }}</p>
                    <v-btn
                      small
                      color="orange"
                      style="margin: auto; display: block;"
                      @click="fimAusencia(ausencia.vendedor.idVendedor)"
                    >
                      Voltar
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
                            <div v-if="espera.vendedor.imagemVendedor === ''">
                              <v-avatar
                                size="70"
                                class="cardAvatar"
                              >
                                <img
                                  :src="iconImage"
                                  width="auto"
                                >
                              </v-avatar>
                            </div>
                            <div v-else>
                              <v-avatar
                                size="70"
                                class="cardAvatar"
                              >
                                <img
                                  :src="espera.vendedor.imagemVendedor"
                                  width="auto"
                                >
                              </v-avatar>
                            </div>
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
                            <div v-if="espera.vendedor.imagemVendedor === ''">
                              <v-avatar
                                size="70"
                                class="cardAvatar"
                              >
                                <img
                                  :src="iconImage"
                                  width="auto"
                                >
                              </v-avatar>
                            </div>
                            <div v-else>
                              <v-avatar
                                size="70"
                                class="cardAvatar"
                              >
                                <img
                                  :src="espera.vendedor.imagemVendedor"
                                  width="auto"
                                >
                              </v-avatar>
                            </div>
                          </v-card>
                          <p class="cardText">{{ espera.vendedor.nomeVendedor }}</p>
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
                          class="cardFila"
                        >
                          <div v-if="atendimento.vendedor.imagemVendedor === ''">
                            <v-avatar
                              size="70"
                              class="cardAvatar"
                            >
                              <img
                                :src="iconImage"
                                width="auto"
                              >
                            </v-avatar>
                          </div>
                          <div v-else>
                            <v-avatar
                              size="70"
                              class="cardAvatar"
                            >
                              <img
                                :src="atendimento.vendedor.imagemVendedor"
                                width="auto"
                              >
                            </v-avatar>
                          </div>
                        </v-card>
                        <p class="cardText">{{ atendimento.vendedor.nomeVendedor }}</p>
                        <v-btn
                          small
                          color="success"
                          style="margin: auto; display: block;"
                          @click="openModalVenda(atendimento.vendedor.nomeVendedor, atendimento.vendedor.idVendedor)"
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
                  Sair
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
                  Sair
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog
          v-model="modalVenda"
          max-width="400"
        >
          <v-card>
            <v-card-title class="headline">Venda realizada com sucesso?</v-card-title>
            <v-btn
              color="success"
              @click="fimAtentimendoVendaRealizada(idVendedor)"
            >
              Sim
            </v-btn>
            <v-btn
              color="warning"
              @click="fimAtendimentoVendaNaoRealizada(idVendedor)"
            >
              Não
            </v-btn>    
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
      iconImage: './img/icon.png',
      contador: '',
      movimento: {
        idVendedor: '',
        tipoMovimento: '',
        statusVenda: false,
        justificativaVenda: '',
        horarioMovimento: {
          horaInicioMovimento: '',
          horaFimMovimento: '',
          dataInicioMovimento: Date,
          dataFimMovimento: Date
        }
      },
      vendaNaoSucedida: {
        idMovimento: '',
        modeloProduto: '',
        corProduto: '',
        numeroProduto: '',
        nomeCliente: '',
        telefoneCliente: ''
      },
      logo: './img/icon.jpg',
      modalAcoes: false,
      modalVenda: false,
      inheritAttrs: false,
      offsetTop: 0
    }
  },
  computed: {
    ...mapState({
      filaAtendimento: state => state.filaAtendimento.all.items
      // mensagem: state => state.filaAtendimento.status
    }),
    ...mapState({
      filaEspera: state => state.filaEspera.all.items
      // mensagem: state => state.filaEspera.status
    }),
    ...mapState({
      filaAusencia: state => state.filaAusencia.all.items
      // mensagem: state => state.filaAusencia.status
    }),
    ...mapState({
      movimentos: state => state.movimentos.all.items,
      movimentosVendedor: state => state.movimentos.allVendedor.items
      // mensagem: state => state.movimentos.status
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
    ...mapActions('movimentos', {
      register: 'register',
      end: 'end'
    }),
    openModalAcoes (nome, id, i) {
      this.nomeVendedor = nome
      this.idVendedor = id
      this.contador = i
      this.modalAcoes = true
    },
    openModalVenda (nome, id) {
      this.nomeVendedor = nome
      this.idVendedor = id
      this.modalVenda = true
    },
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    },
    inicioAtendimento (idVendedor) {
      if (idVendedor !== null) {
        this.iniciarAtendimento(idVendedor)
        this.modalAcoes = false
        this.movimento.idVendedor = idVendedor

        const options = {
          timeZone: 'America/Sao_Paulo',
          hour: 'numeric',
          minute: 'numeric'
        }
        const zeroFill = n => {
          return ('0' + n).slice(-2);
        }
        const now = new Date();
        
				let data = now.getFullYear() + '-' + zeroFill((now.getMonth() + 1)) + '-' + zeroFill(now.getUTCDate()) + 'T00:00:00.00Z'      
        let hora = new Intl.DateTimeFormat([], options)

        this.movimento.horarioMovimento.horaInicioMovimento = hora.format(new Date())
        this.movimento.horarioMovimento.dataInicioMovimento = data
        this.movimento.tipoMovimento = 'Venda'
        this.register(this.movimento)
      }
    },
    fimAtentimendoVendaRealizada (idVendedor) {
      if (idVendedor !== null) {
        this.finalizarAtendimento(idVendedor)
        this.modalVenda = false
        this.movimento.idVendedor = idVendedor

        const options = {
          timeZone: 'America/Sao_Paulo',
          hour: 'numeric',
          minute: 'numeric'
        }
        const zeroFill = n => {
          return ('0' + n).slice(-2);
        }
        const now = new Date();
        
				let data = now.getFullYear() + '-' + zeroFill((now.getMonth() + 1)) + '-' + zeroFill(now.getUTCDate()) + 'T00:00:00.00Z'      
        let hora = new Intl.DateTimeFormat([], options)

        this.movimento.horarioMovimento.horaFimMovimento = hora.format(new Date())
        this.movimento.horarioMovimento.dataFimMovimento = data
        this.movimento.horarioMovimento.horaInicioMovimento = "00:00"

        console.log(this.movimento.horarioMovimento.horaFimMovimento)
        console.log(this.movimento.horarioMovimento.dataFimMovimento)

        this.movimento.statusVenda = true
        this.end(this.movimento)
      }
    },
    fimAtendimentoVendaNaoRealizada (idVendedor) {
      if (idVendedor !== null) {
        this.finalizarAtendimento(idVendedor)
        this.modalVenda = false
        this.movimento.idVendedor = idVendedor

        const options = {
          timeZone: 'America/Sao_Paulo',
          hour: 'numeric',
          minute: 'numeric'
        }
        const zeroFill = n => {
          return ('0' + n).slice(-2);
        }
        const now = new Date();
        
				let data = now.getFullYear() + '-' + zeroFill((now.getMonth() + 1)) + '-' + zeroFill(now.getUTCDate()) + 'T00:00:00.00Z'      
        let hora = new Intl.DateTimeFormat([], options)

        this.movimento.horarioMovimento.horaFimMovimento = hora.format(new Date())
        this.movimento.horarioMovimento.dataFimMovimento = data
        this.movimento.statusVenda = false
        this.end(this.movimento)


      }
    },
    inicioAusencia (idVendedor) {
      if (idVendedor !== null) {
        this.iniciarAusencia(idVendedor)
        this.modalAcoes = false
        this.movimento.idVendedor = idVendedor

        const options = {
          timeZone: 'America/Sao_Paulo',
          hour: 'numeric',
          minute: 'numeric'
        }
        const zeroFill = n => {
          return ('0' + n).slice(-2);
        }
        const now = new Date();
        
				let data = now.getFullYear() + '-' + zeroFill((now.getMonth() + 1)) + '-' + zeroFill(now.getUTCDate()) + 'T00:00:00.00Z'      
        let hora = new Intl.DateTimeFormat([], options)

        this.movimento.horarioMovimento.horaInicioMovimento = hora.format(new Date())
        this.movimento.horarioMovimento.dataInicioMovimento = data
        this.movimento.tipoMovimento = 'Ausencia'
        this.register(this.movimento)
      }
    },
    fimAusencia (idVendedor) {
      this.finalizarAusencia(idVendedor)
      if (idVendedor !== null) {
        this.movimento.idVendedor = idVendedor
        this.movimento.statusVenda = false
        this.movimento.justificativaVenda = 'Teste ausencia'
        this.end(this.movimento)
      }
    }
  }
}
</script>
