<template>
  <div
    id="app"
    class="fundo">
    <v-app id="pacific">
      <v-container
        fill-height
        fluid
        grid-list-xl
      >
        <v-layout wrap>
          <v-flex
            xl12
            lg12
            md12
            sm12
            xs12
          >
            <v-layout>
              <v-flex
                xl6
                lg6
                md6
                sm12
                xs12
              >
                <material-card
                  color="grey darken-2"
                  title="Cores"
                >
                  <v-form
                    ref="formCor"
                    v-model="validCor"
                    lazy-validation
                  >
                    <v-layout>
                      <v-flex
                        xl10
                        lg10
                        md10
                        sm12
                        xs12
                      >
                        <v-text-field
                          v-model="cor.descricaoCor"
                          :rules="[v => !!v || 'O campo cor é obrigatório!']"
                          label="CADASTRAR COR"
                          required
                        />
                      </v-flex>
                      <v-flex
                        xl2
                        lg2
                        md2
                        sm12
                        xs12
                      >
                        <v-btn
                          :disabled="!validCor"
                          color="success"
                          tile
                          x-large
                          icon
                          @click="cadastrarCor">
                          <v-icon>mdi-plus-circle</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-form>
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Pesquisar"
                    single-line
                    hide-details
                  />
                  <v-data-table
                    :headers="headers"
                    :items="cores"
                    :search="search"
                    :footer-props="{
                      showFirstLastPage: true,
                      itemsPerPageText: 'Quantidade por página'
                    }"
                    sort-by="descricaoCor"
                    class="elevation-1"
                  >
                    <template v-slot:item.edit="{ item }">
                      <v-btn
                        color="cyan accent-4"
                        tile
                        x-large
                        icon>
                        <v-icon>mdi-pencil-circle</v-icon>
                      </v-btn>
                    </template>
                    <template v-slot:item.delete="{ item }">
                      <v-btn
                        color="red accent-2"
                        x-large
                        tile
                        icon
                        @click="openModalDeleteCor(item.descricaoCor, item.idCor)">
                        <v-icon>mdi-delete-circle</v-icon>
                      </v-btn>
                    </template>
                    <template v-slot:no-data>
                      <v-alert
                        :value="true"
                        color="error"
                        icon="mdi-alert"
                      >Não existem cores cadastradas!</v-alert>
                    </template>
                    <template v-slot:no-results>
                      <v-alert
                        :value="true"
                        color="error"
                        icon="mdi-alert"
                      >Não foram encontradros nunhum resultado para a pesquisa!</v-alert>
                    </template>
                  </v-data-table>
                </material-card>
                <v-dialog
                  v-model="modalDeleteCor"
                  max-width="500"
                >
                  <v-card>
                    <v-card-title class="headline">Deseja realmente excluir a cor?</v-card-title>
                    <v-card-text>
                      A cor {{ descricaoCor }} será excluido permanentemente do sistema!
                    </v-card-text>
                    <v-card-actions>
                      <div class="flex-grow-1"/>
                      <v-btn
                        color="red darken-1"
                        text
                        @click="modalDeleteCor = false"
                      >
                        Cancelar
                      </v-btn>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="deletarCor(idCor)"
                      >
                        Confirmar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      show: false,
      search: '',
      validCor: true,
      nomeUsuario: '',
      idUsuario: '',
      idCor: '',
      descricaoCor: '',
      cor: {
        descricaoCor: ''
      },
      modalDeleteCor: false,
      textoPaginacao: 'Qtd por Página',
      headers: [
        { text: 'Descrição', align: 'left', value: 'descricaoCor' },
        { text: 'Editar', align: 'center', value: 'edit', sortable: false },
        { text: 'Excluir', align: 'center', value: 'delete', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      cores: state => state.cores.all.items
    })
  },
  created () {
    this.getAllCores()
  },
  methods: {
    ...mapActions('cores', {
      getAllCores: 'getAll',
      registerCor: 'register',
      deleteCor: 'delete'
    }),
    cadastrarCor () {
      if (this.$refs.formCor.validate()) {
        this.registerCor(this.cor)
        this.$refs.formCor.reset()
      }
    },
    openModalDeleteCor (descricao, id) {
      this.descricaoCor = descricao
      this.idCor = id
      this.modalDeleteCor = true
    },
    deletarCor (id) {
      this.deleteCor(id)
      this.modalDeleteCor = false
    }
  }
}
</script>
