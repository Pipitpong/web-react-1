import { useState } from 'react'

import { Input } from './components/Input'
import { Navbar } from './components/Navbar'
import { Post } from './components/Post'

let id = 1

function App() {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')

  function addPost() {
    const newPost = { id: id, title: input }
    setPosts([newPost, ...posts])
    setInput('')
    id += 1
  }

  function DeletePost(id) {
    const updatedPost = posts.filter((post) => post.id != id)
    setPosts(updatedPost)
  }

  return (
    <div className="App">
      <Navbar />
      <Input onEnter={addPost} input={input} setInput={setInput} />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          DeletePost={DeletePost}
        />
      ))}
    </div>
  )
}
export default App
