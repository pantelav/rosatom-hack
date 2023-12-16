export interface IApiImage {
  id: number
  timestamp: number
  pipe_id: 1
  url: string
  pipe_n: number
  name: string
}

export interface IApiPipe {
  id: number
  images: IApiImage[]
  name: string
  timestamp: number
}

export interface IApiPipeCategory {
  name: string
  id: number
  type: null
  isDeleted: null
  timestamp: number
}
