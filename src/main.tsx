import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import {App} from './components/app/app'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
