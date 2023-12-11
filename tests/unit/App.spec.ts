import { render, screen } from '@testing-library/vue'
import App from '../../src/App.vue'

describe('App', () => {
  it('test', () => {
    render(App)

    screen.getByText('Test title')
  })
})
