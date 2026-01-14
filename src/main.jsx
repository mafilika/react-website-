import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function Main() {
    return (
        <main>
              <h2>Welcome</h2>
                    <p>This is the main section of phone MADE Website.</p>
                        </main>
                          );
                          }

                          export default Main;
