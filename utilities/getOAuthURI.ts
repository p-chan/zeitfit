import { stringify } from 'qs'

const getOAuthURI = () => {
  const query = stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    scope: process.env.GOOGLE_SCOPE,
    response_type: 'token'
  })

  return `https://accounts.google.com/o/oauth2/auth?${query}`
}

export default getOAuthURI
