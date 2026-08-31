import { useEffect, useState, useRef} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { FaPlay, FaStop, FaRedo } from 'react-icons/fa';

function App() {
  const [status, setStatus] = useState('')
  const [command, setCommand] = useState('')


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


  return (
    <div className='main-container'>

      <div className='buttons-bar'>

        <h2 className='btbartittle'>Server Dashboard</h2>

        <div className='btgroup'>
          <button className='bt start'>
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

          <p>[14:00:01] Servidor Vintage Story iniciado...</p>
          <p>[14:00:01] O Player thyfnn se conectou!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          <p>[14:00:01] O servidor está sobrecarregado!</p>
          
          
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
            Status
          </div>
          <div className='info-window content'>
            <p><strong>Estado:</strong> Online</p>
            <p><strong>CPU:</strong> 15%</p>
            <p><strong>RAM:</strong> 2.4 GB</p>
            <p><strong>Jogadores:</strong> 3/16</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
