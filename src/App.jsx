import { useState } from 'react'
import './App.css'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>My AWS Static Website</h1>
        <p>Welcome to my cloud-hosted React app!</p>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            You've clicked me {count} times
          </button>
        </div>
        
        <div className="about-section">
          <h2>About This Project</h2>
          <p>This website is hosted on AWS using:</p>
          <ul>
            <li>React for the frontend</li>
            <li>AWS Amplify for hosting</li>
            <li>CloudFront for global delivery</li>
            <li>GitHub for version control</li>
          </ul>
        </div>
        <div>
          <About />
        </div>
      </header>
    </div>
  )
}

export default App