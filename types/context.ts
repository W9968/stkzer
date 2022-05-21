import { category, list } from './data'

export interface initialContext {
  loading: boolean
  categories: category[]
  lists: list[]
  fetchFromPool: (query: string) => void
  insertIntoPool: (query: string, data: string) => void
  deleteFromPool: (query: string, id: number) => void
}

export const initialStore: initialContext = {
  loading: false,
  categories: [],
  lists: [],
  fetchFromPool: () => {},
  insertIntoPool: () => {},
  deleteFromPool: () => {},
}
