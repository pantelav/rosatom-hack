import { api } from 'src/boot/axios'
import { config } from 'src/appConfig'

export async function sendPipeImgages(files: File[] | null) {
  let apiError: unknown | null = null
  try {
    if (files == null) return
    const formData = new FormData()
    for (let i = 0; i < files?.length; i++) {
      formData.append('files', files[i])
    }
    await api.post(config.endpoints.test, formData)
  } catch (error) {
    console.log('Ошибочка')
    console.log(error)
    apiError = error
  }

  return { apiError }
}
