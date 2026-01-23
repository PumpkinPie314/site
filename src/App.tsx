import Nav from './Nav';
import Post from './Post';

function App() {
  return (
    <> 
      <div className='flex-col w-100% h-dvh bg-gray-900 '>
        <Nav />
        <div id="posts">
          <Post />
        </div>
      </div>
    </>
  )
}

export default App
