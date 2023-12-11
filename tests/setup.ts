import '@testing-library/jest-dom'
import { config } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import ResizeObserver from 'resize-observer-polyfill'

global.ResizeObserver = ResizeObserver

const vuetify = createVuetify({
  components,
  directives,
})

config.global.plugins = [vuetify]
