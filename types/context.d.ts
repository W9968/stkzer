import { category } from './data.d'

export interface initialContext {
  categories: category[]
}

export const initialStore: initialContext = {
  categories: [],
}
