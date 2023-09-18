
import './App.css'
import GoLegal from './componets/GoLegal'

function App() {
  

  return (
    // alt + z (make code view on screen)
    <div className='bg-[#1A232E] h-screen py-6 relative sm:px-28 text-white overflow-hidden flex flex-col justify-between align-middle'>

        {/*gradients */}
      <div className='gradient-01 z-0 absolute '></div>
      <div className='gradient-02 z-0 absolute '></div>
      <div className='gradient-02 z-0 absolute '></div>
      <div className='gradient-03 z-0 absolute '></div>

      {/* header */}
      <div className = 'uppercase font-bold text-2xl  text-center mb-3'>Go Legal</div>

      {/* body */}
      <div>
        <GoLegal/>
      </div>
     
      {/* input */}
      <div>input</div>
      
    </div>
  )
}

export default App
