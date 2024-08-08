import { Authenticator } from '@aws-amplify/ui-react'
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
