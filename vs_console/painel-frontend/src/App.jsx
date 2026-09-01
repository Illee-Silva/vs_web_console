import { useEffect, useState, useRef} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { FaPlay, FaStop, FaRedo } from 'react-icons/fa';

function App() {
  const [command, setCommand] = useState('')
  const pcip = '100.125.83.74';

  // Stats Variables
  const [status, setStatus] = useState('')
  const [version, setVersion] = useState('')
  const [uptime, setUptime] = useState('')
  const [playerslastonline, setPlayersLastOnline] = useState('')
  const [playersonline, setPlayersOnline] = useState('')
  const [memoryusagemanaged, setMemoryUsageManaged] = useState('')
  const [memoryusagetotal, setMemoryUSageTotal] = useState('')
  const [last2savgticktime, setLast2savgTickTime] = useState('')
  const [last2stickpers, setLast2sTickPers] = useState('')
  const [last10ticks, setLast10Ticks] = useState('')
  const [loadedchunks, setLoadedChunks] = useState('')
  const [loadedentities, setLoadedEntities] = useState('')
  const [networktcp, setNetworkTCP] = useState('')
  const [networkudp, setNetworkUDP] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {

    const listenkeyboard = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current){

        e.preventDefault();
        inputRef.current.focus()
        setCommand('/')

      }
    };

    window.addEventListener('keydown', listenkeyboard);
    
    return () => {
      window.removeEventListener('keydown', listenkeyboard)
    };

  }, [])

  useEffect(() =>{

// Implement in the future!

  })

  const startServer = async () => {
    
    try{
      const res = await fetch(`http://${pcip}/api/start`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'}
      });
      
    }
    catch (e){
      console.error(e);
    }

  }

  return (
    <div className='main-container'>

      <div className='buttons-bar'>

        <h2 className='btbartittle'>Server Dashboard</h2>

        <div className='btgroup'>
          <button className='bt start'
            onClick={startServer}
          >
            <FaPlay />

          </button>

          <button className='bt stop'>
            <FaStop />
          </button>

          <button className='bt redo'>
            <FaRedo />
          </button>

          </div>
        
      </div>
      
      <div className='content-area'>

        <div className='console-window'>
          <div className='console-window-tittle'>
            Terminal Output
          </div>
          <div className='console-window-content'>
            <p>Console Ready! you may start the server clicking on the play button!</p>
          </div>

          <div className='console-input-bar'>
            <span style={{color: '#4caf50', fontWeight: "bold"}}>&gt;</span>
            <input
              type='text'
              ref={inputRef}
              className='console-input'
              placeholder='Type any command...'
              value = {command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && setCommand('')}
            />
          </div>

        </div>

        <div className='info-window'>
          <div className='info-window tittle'>
            Stats
          </div>
          <div className='info-window content'>
            
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
