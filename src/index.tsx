import React from 'react'
    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import App from './App.tsx'
    import './index.css'
    import { Provider as ReduxProvider } from 'react-redux'
    import { createStore } from 'redux'
    import todoReducer from './todoSlice'

    const store = createStore(todoReducer)

    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </StrictMode>
    )
