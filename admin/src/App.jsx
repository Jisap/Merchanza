
import Navbar from './components/Navbar'
import Admin from './pages/Admin'



function App() {


  return (
    <main classname='bg-primary text-tertiary'>
      <div classname='mx-auto max-w-[1500px]'>
        <Navbar />
        <Admin />
      </div>
    </main>
  )
}

export default App
