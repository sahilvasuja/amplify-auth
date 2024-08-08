
import './App.css'
import "@aws-amplify/ui-react/styles.css"
import { Authenticator } from '@aws-amplify/ui-react'
import Signin from './Signin'
function App() {

  return (
    <>
     <Authenticator.Provider>

      <p className="read-the-docs">
       hlo
      </p>
      <Signin />
     </Authenticator.Provider>
    </>
  )
}

export default App
