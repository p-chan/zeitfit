import { getOAuthURI } from '../utilities'

const GuestComponent = () => {
  const OAuthURI = getOAuthURI()

  return (
    <div>
      <h1>ZEITFIT</h1>
      <p>Welcome to ZEITFIT</p>
      <p>
        <a href={OAuthURI}>Sign in with Google</a>
      </p>
    </div>
  )
}

export default GuestComponent
