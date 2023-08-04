import { useState } from 'react'
import axios from 'axios'

const usePostRequest = () => {
  const [response, setResponse] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const postRequest = async (url, body, config = null) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post(url, body)
      setResponse(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { response, isLoading, error, postRequest }
}

export default usePostRequest
