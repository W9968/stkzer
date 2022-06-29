import { useEffect } from 'react'
import { __supabase } from 'hooks/useSupa'
import Spinner from 'modules/loading/Spinner'
import { createContext, useContext, useState, ReactElement } from 'react'

type ContexProp = {
  children: ReactElement
}

type User = {
  user_id: string | undefined
  user_email: string | undefined
  user_name: string | undefined
  user_avatar: string | undefined
}

type StoreContext = {
  currentUser: User
  isLoaggedIn: boolean
  isLoading: boolean
  subscirebdUser: () => void
  login: (service: 'github' | 'google') => void
  logout: () => void
}

const initialStoreValue: StoreContext = {
  currentUser: {
    user_id: undefined,
    user_email: undefined,
    user_name: undefined,
    user_avatar: undefined,
  },
  isLoading: true,
  isLoaggedIn: false,
  subscirebdUser: () => {},
  login: () => {},
  logout: () => {},
}

const AuthContext = createContext<StoreContext>(initialStoreValue)
export const __auth = () => useContext(AuthContext)

export default function AuthProvider({ children }: ContexProp) {
  const [currentUser, setCurrentUser] = useState<User>(
    initialStoreValue.currentUser
  )
  const [isLoaggedIn, setLoggedIn] = useState<boolean>(
    initialStoreValue.isLoaggedIn
  )

  const [isLoading, setLoading] = useState<boolean>(initialStoreValue.isLoading)

  const subscirebdUser = async () => {
    setLoading(true)
    const user = await __supabase.auth.user()
    setCurrentUser({
      user_id: user?.id,
      user_name: user?.user_metadata.full_name,
      user_email: user?.email,
      user_avatar: user?.user_metadata.avatar_url,
    })
    if (user) {
      setLoggedIn(true)
    }
    setLoading(false)
  }

  const login = async (service: 'github' | 'google') => {
    await __supabase.auth.signIn({
      provider: service,
    })
  }

  const logout = async () => {
    await __supabase.auth.signOut().then(() => {
      setCurrentUser({
        user_id: undefined,
        user_email: undefined,
        user_name: undefined,
        user_avatar: undefined,
      })
      setLoggedIn(false)
    })
  }

  useEffect(() => {
    return () => {
      subscirebdUser()
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    const { data: listener } = __supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN') {
          setCurrentUser({
            user_id: session?.user?.id,
            user_name: session?.user?.user_metadata.full_name,
            user_email: session?.user?.email,
            user_avatar: session?.user?.user_metadata.avatar_url,
          })
        }
      }
    )
    setLoading(false)
    if (currentUser.user_id) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    return () => {
      listener?.unsubscribe()
    }
  }, [currentUser])

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoaggedIn,
        currentUser,
        subscirebdUser,
        login,
        logout,
      }}>
      {isLoading ? <Spinner /> : children}
    </AuthContext.Provider>
  )
}
