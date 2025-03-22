import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { BrowserRouter } from 'react-router'
import MainRoute from '../router/mainRoute'
import { QueryProvider } from '../context/queryContext'
import './style.css'
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
