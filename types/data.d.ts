export interface category {
  category_name: string
  category_created_at: string
}

export interface list {
  id: number
  name: string
  summary: string
  image: string
  state: string
  created_at: string
  category: number
}
