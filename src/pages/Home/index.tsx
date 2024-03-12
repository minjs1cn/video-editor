import Tool from './Tool'
import Track from './Track'
import { HomeContext, useHomeContextValue } from './context'
import './index.css'

function Home() {
  const homeContextValue = useHomeContextValue()
  return (
    <HomeContext.Provider value={homeContextValue}>
      <div className="panel">
        <Tool />
        <Track />
      </div>
    </HomeContext.Provider>
  )
}

export default Home
