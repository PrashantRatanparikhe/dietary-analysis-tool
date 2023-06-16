import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import * as labs from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

export default createVuetify({
  components: {
    ...labs,
    VDataTableServer,
  },
  directives,
})