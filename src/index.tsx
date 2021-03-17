import React from 'react'
import { hydrate, render } from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { LightTheme, BaseProvider } from 'baseui'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import 'bootstrap/dist/css/bootstrap.css'
import { ProvideAuth } from './hooks/use-auth'
import { BrowserRouter } from 'react-router-dom'

const engine = new Styletron()
const root = document.getElementById('root') as any

if (root.hasChildNodes()) {
  hydrate(
    <ProvideAuth>
      <BrowserRouter>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <App />
          </BaseProvider>
        </StyletronProvider>
      </BrowserRouter>
    </ProvideAuth>,
    root
  )
} else {
  render(
    <ProvideAuth>
      <BrowserRouter>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <App />
          </BaseProvider>
        </StyletronProvider>
      </BrowserRouter>
    </ProvideAuth>,
    root
  )
}

reportWebVitals()
