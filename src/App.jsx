import { Provider } from 'react-redux'
import './style.css'
import { store } from './redux/store'
import { BrowserRouter } from 'react-router'
import MainRoute from './router/mainRoute'
import { QueryProvider } from './context/queryContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <QueryProvider>
          <Provider store={store}>
            <MainRoute />
          </Provider>
        </QueryProvider>
      </BrowserRouter>
    </>
  )
}

export default App
