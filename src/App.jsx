import { Provider } from 'react-redux'
import './style.css'
import { store } from './redux/store'
import { BrowserRouter } from 'react-router'
import MainRoute from './router/mainRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <MainRoute />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
