import { useState } from 'react'
import axios from 'axios'

const usePutRequest = () => {
  const [response, setResponse] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const putRequest = async (url, body) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.put(url, body)
      setResponse(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { response, isLoading, error, putRequest }
}

export default usePutRequest
