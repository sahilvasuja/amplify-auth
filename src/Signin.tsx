import { Authenticator } from '@aws-amplify/ui-react'
import outputs from "../amplify_outputs.json"
import { Amplify } from "aws-amplify"
Amplify.configure(outputs)
const Signin = () => {
  return (
    <>
        
        
    <Authenticator>
    {({ signOut }) => (
      <main>
        {/*...*/}
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
  </Authenticator>
    </>
  
  )
}

export default Signin
