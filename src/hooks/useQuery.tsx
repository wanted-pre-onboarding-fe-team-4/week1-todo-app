import API from '@src/api'
import { ErrorsType } from '@src/types/ErrorsType'
import { isAxiosError, Method } from 'axios'
import { useCallback, useState } from 'react'

interface Props<T> {
  url: string
  method: Method
  onSuccess?: (data: T) => void | Promise<void>
  onFailure?: (e: unknown) => void | Promise<void>
  successMessage?: string
  errors?: ErrorsType | string
}

export const useQuery = <T,>({
  url,
  method,
  onSuccess,
  onFailure,
  successMessage,
  errors,
}: Props<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)

  const query = useCallback(
    async <Body,>(body?: Body) => {
      setIsLoading(true)

      try {
        const { data } = await API({
          url,
          method,
          data: body,
        })

        if (successMessage) alert(successMessage)

        setData(data)
        if (onSuccess) await onSuccess(data)
      } catch (e) {
        if (!isAxiosError(e)) return alert('알 수 없는 에러가 발생했습니다')

        if (e.response && e.response.status >= 500) {
          alert('알 수 없는 에러가 발생했습니다')
        } else if (typeof errors === 'string') {
          alert(errors)
        } else if (errors && e.response && errors[e.response.status]) {
          alert(errors[e.response.status])
        }

        if (onFailure) await onFailure(e)
      } finally {
        setIsLoading(false)
      }
    },
    [url, method, onSuccess, onFailure, successMessage, errors]
  )

  return { query, isLoading, data }
}
