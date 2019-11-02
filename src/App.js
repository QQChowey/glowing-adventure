import React from 'react';
import ModeContainer from './containers/mode_container'
import StatContainer from './containers/stat_container'
import TeamContainer from './containers/team_container'

function App() {
  return (
    <div>
        <div>
            <ModeContainer />
        </div>
        <div>
            <TeamContainer />
        </div>
        <div>
            <StatContainer />
        </div>
        Hello World!
    </div>
  );
}

export default App;
