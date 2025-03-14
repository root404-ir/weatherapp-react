import { Provider } from 'react-redux'
import Weather from './component/Weather'
import './style.css'
import { store } from './redux/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <Weather />
      </Provider>
    </>
  )
}

export default App
