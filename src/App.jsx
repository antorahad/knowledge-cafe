import Header from './components/Header'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex justify-center gap-[20px] px-[100px]'>
      <div className='flex-1'>
      <Blogs></Blogs>
      </div>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
