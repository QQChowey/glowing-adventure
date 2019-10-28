import React from 'react';
import TeamContainer from './components/team/team_container'

function App() {
  return (
    <div>
        <div>
            <TeamContainer monsId={["0", "0", "0", "0", "0", null]}/>
            <TeamContainer monsId={[null, "0", "0", "0", "0", "0"]}/>
            <TeamContainer />
        </div>
        <div>

        </div>Hello World!
    </div>
  );
}

export default App;
