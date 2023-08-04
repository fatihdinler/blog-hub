import useGetRequest from './use-get'
import usePostRequest from './use-post'
import usePutRequest from './use-put'
import usePatchRequest from './use-patch'

const App = () => {
  // GET Request Example
  const { data: fetchedData, isLoading: isGetDataLoading, error: getError } = useGetRequest('https://api.example.com/data')

  // POST Request Example
  const { response: postData, isLoading: isPostDataLoading, error: postError, postRequest } = usePostRequest()

  // PUT Request Example
  const { response: putData, isLoading: isPutDataLoading, error: putError, putRequest } = usePutRequest()

  // PATCH Request Example
  const { response: patchData, isLoading: isPatchDataLoading, error: patchError, patchRequest } = usePatchRequest()

  const handlePost = () => {
    const postData = { title: 'New Post', content: 'This is the content of the new post.' }
    postRequest('https://api.example.com/posts', postData)
  }

  const handlePut = () => {
    const putData = { title: 'Updated Post', content: 'This is the updated content of the post.' }
    putRequest('https://api.example.com/posts/1', putData)
  }

  const handlePatch = () => {
    const patchData = { content: 'This is a patched content update.' }
    patchRequest('https://api.example.com/posts/1', patchData)
  }

  return (
    <div>
      {/* GET Request */}
      <h2>GET Request</h2>
      {isGetDataLoading ? <p>Loading...</p> : getError ? <p>Error: {getError.message}</p> : fetchedData && (
        <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
      )}

      {/* POST Request */}
      <h2>POST Request</h2>
      <button onClick={handlePost}>Create Post</button>
      {isPostDataLoading ? <p>Creating...</p> : postError ? <p>Error: {postError.message}</p> : postData && (
        <pre>{JSON.stringify(postData, null, 2)}</pre>
      )}

      {/* PUT Request */}
      <h2>PUT Request</h2>
      <button onClick={handlePut}>Update Post</button>
      {isPutDataLoading ? <p>Updating...</p> : putError ? <p>Error: {putError.message}</p> : putData && (
        <pre>{JSON.stringify(putData, null, 2)}</pre>
      )}

      {/* PATCH Request */}
      <h2>PATCH Request</h2>
      <button onClick={handlePatch}>Patch Post</button>
      {isPatchDataLoading ? <p>Patching...</p> : patchError ? <p>Error: {patchError.message}</p> : patchData && (
        <pre>{JSON.stringify(patchData, null, 2)}</pre>
      )}
    </div>
  )
}

export default App
