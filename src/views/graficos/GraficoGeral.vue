<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>{{ dadosGrafico() }}
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

<script>
import { mapState, mapActions } from 'vuex'
// import Legend from 'chartist-plugin-legend'
import Tooltip from 'chartist-plugin-tooltip'

export default {
  data () {
    return {
      grafico: {
        data: {
          labels: '',
          series: [
            [], []
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
    })
  },
  created () {
    this.getAll()
  },
  methods: {
    ...mapActions('movimentos', {
      getAll: 'getAllGrafico'
    }),
    dadosGrafico () {
      try {
        this.grafico.data.labels = this.dados[0].labels
        this.grafico.data.series[0] = this.dados[0].series1
        this.grafico.data.series[1] = this.dados[0].series2
      } catch (e) {}
    }
  }
}
</script>
