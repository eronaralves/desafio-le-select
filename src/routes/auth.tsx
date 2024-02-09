import { useEffect, useState } from "react"


export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token) {
      setAuthenticated(true)
    }

  }, [])

  return {
    authenticated
  }
}