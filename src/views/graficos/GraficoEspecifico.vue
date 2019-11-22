<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
    class="wrapper-content"
  >
    <v-row align="center" class="container-select-menu" style="border: 2px solid red;">
       <v-flex
          xl12
          lg12
          md12
          sm12
          xs12
        >
          <v-select
            v-model="vendaNaoSucedida.marcaProduto"
            :items="marcaProduto"
            :rules="marcaProdutoRules"
            outlined
            label="Marca"
          />
      </v-flex>
    </v-row>

    <v-layout wrap class="container-graphic">{{ dadosGrafico() }}
      <v-flex
        xl12
        lg12
        md12
        sm12
        xs12
      >
        <chartist
          :data="grafico.data"
          :options="grafico.options"
          :responsive-options="grafico.responsiveOptions"
          :plugins="grafico.plugins"
          style="height: 400px"
          type="Bar"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss">
  .wrapper-content { border: 2px solid blue; display: flex; flex-direction: column; }
  .container-select-menu { border: 2px solid red; display: block; width: 100%; }
  .container-graphic { border: 2px solid orange; display: block; width: 100%; max-height: 517px; }
</style>

<script>
import { mapState, mapActions } from 'vuex'
// import Legend from 'chartist-plugin-legend'
import Tooltip from 'chartist-plugin-tooltip'

export default {
  data () {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      grafico: {
        data: {
          labels: 'teste, teste',
          series: [
            ['1', '2', '3'], ['4', '5']
          ]
        },
        options: {
          plugins: [
            // Legend(),
            Tooltip()
          ],
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 10,
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      }
    }
  },
  computed: {
    ...mapState({
      dados: state => state.movimentos.all.items
    }),
    ...mapState({
    vendedores: state => state.vendedores.all.items
    })
  },
  created () {
   this.getAll()
  },
  methods: {
    ...mapActions('movimentos', {
      getPorId: 'getGraficoPorID'
    }),

     ...mapActions('vendedores', {
      getAll: 'getAll'
    }),
    
    buscarMovimentosVendedor (idVendedor) {
      this.getPorId(idVendedor)
    },
    dadosGrafico() {
      try {
        this.grafico.data.labels = this.dados[0].labels
        this.grafico.data.series[0] = this.dados[0].series1
        this.grafico.data.series[1] = this.dados[0].series2
      } catch (e) {}
    }

  }
}
</script>
