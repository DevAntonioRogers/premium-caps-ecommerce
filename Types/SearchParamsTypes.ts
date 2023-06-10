type Params = {
  id: string
}

type SearchParams = {
  name: string
  image: string
  unit_amount: number | null
  id: string
  quanity?: number | 1
  description: string | null
  metadata: MetadataType
}

type MetadataType = {
  features: string 
}


export type SearchParamTypes = {
  params: Params,
  searchParams : SearchParams
}