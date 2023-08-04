import { useState } from 'react'
import axios from 'axios'

const usePatchRequest = () => {
  const [response, setResponse] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const patchRequest = async (url, body) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.patch(url, body)
      setResponse(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { response, isLoading, error, patchRequest }
}

export default usePatchRequest
