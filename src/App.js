import React from 'react';
import TeamContainer from './components/team/team_container'

function App() {
  return (
    <div>
        <div>
            <TeamContainer mons_id={["0", "0", "0", "0", "0", null]}/>
            <TeamContainer mons_id={[null, "0", "0", "0", "0", "0"]}/>
            <TeamContainer />
        </div>
        <div>

        </div>Hello World!
    </div>
  );
}

export default App;
