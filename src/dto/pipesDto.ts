import type { IApiPipeCategory, IApiPipe } from 'src/types/apiResponse'

export function apiPipesDto(data: IApiPipeCategory[]) {
  const pipes = data.map((pipe) => {
    return {
      id: pipe.id,
      name: pipe.name,
      timestamp: pipe.timestamp
    }
  })
  return pipes
}

export function apiPipeDto(data: IApiPipe) {
  
}
