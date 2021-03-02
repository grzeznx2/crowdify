import { useHistory, useLocation } from 'react-router-dom'

export default function useOptionalRedirect(location) {
  const history = useHistory()
  const searchParams = new URLSearchParams(useLocation().search)
  const redirectTo = searchParams.get('redirectTo')

  const redirect = () => {
    if (redirectTo) history.push(redirectTo)
    else history.push(location)
  }

  return { redirect }
}
