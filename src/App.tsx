import '../styles/app.css'
import '../styles/raceCard.css'

import Scoreboard from '../components/Scoreboard'
import InfoLine from '../components/InfoLine'

import OrcReduxCard from '../components/OrcReduxCard'
import TrollReduxCard from '../components/TrollReduxCard'
import TaurenReduxCard from '../components/TaurenReduxCard'
import UndeadReduxCard from '../components/UndeadReduxCard'


function App() {

  return (
      <div>
        <Scoreboard />
        <div className='cards'>
          <OrcReduxCard />
          <TrollReduxCard />
          <TaurenReduxCard />
          <UndeadReduxCard />
        </div>
        <InfoLine /> 
      </div>
  )
}

export default App
