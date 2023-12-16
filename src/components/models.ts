export interface IFilterOption {
  title: string
  id: number
  value: boolean
  color: string
}

export interface IPipeProps {
  filename: string
  imgUrl?: string
  defects: IFilterOption[]
  date: Date | number
}
