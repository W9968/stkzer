import { category, list } from './data'

export interface initialContext {
  categories: category[]
  lists: list[]
  fetchFromPool: (query: string) => void
  insertIntoPool: (query: string, data: string) => void
  deleteFromPool: (query: string, id: number) => void
}

export const initialStore: initialContext = {
  categories: [],
  lists: [],
  fetchFromPool: () => {},
  insertIntoPool: () => {},
  deleteFromPool: () => {},
}
