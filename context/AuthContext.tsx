import { supabase } from 'hooks/useSupa'
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react'

export type user = {
  user_id: string | undefined
  user_email: string | undefined
}

interface storeInterface {
  currentUser: user
  subscirebdUser: () => void
  signIn: (email: string, password: string) => void
  logout: () => void
}

const initialStoreValue: storeInterface = {
  currentUser: {
    user_id: undefined,
    user_email: undefined,
  },
  subscirebdUser: () => {},
  signIn: () => {},
  logout: () => {},
}

const AuthProvider = createContext<storeInterface>(initialStoreValue)
export const __auth = () => useContext(AuthProvider)

type contextProp = {
  children: ReactElement
}

export default function AuthContext({ children }: contextProp) {
  const [currentUser, setCurrentUser] = useState<user>(
    initialStoreValue.currentUser
  )

  /**
   * @description gets the current subscribed users
   * @returns {void}
   */
  const subscirebdUser = async function () {
    const user = await supabase.auth.user()
    setCurrentUser({ user_email: user?.email, user_id: user?.id })
  }

  /**
   * @description magic link sign in function
   * @param {string} email
   * @returns {void}
   */
  const signIn = async function (email: string, password: string) {
    const { user, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    })
    console.log('user => ', user)
    console.log('error => ', error)
  }

  /**
   * @description log out from your session
   * @returns {void}
   */
  const logout = async function () {
    const { error } = await supabase.auth.signOut()
    console.log('error => ', error)
  }

  useEffect(() => {
    subscirebdUser()
  }, []) // eslint-disable-line

  return (
    <AuthProvider.Provider
      value={{ currentUser, subscirebdUser, signIn, logout }}>
      {children}
    </AuthProvider.Provider>
  )
}
