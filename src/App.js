import React from 'react';
import TeamContainer from './components/team/team_container'

function App() {
  return (
    <div>
        <div>
            <TeamContainer id={["1", "2", "3", "4", "5", "0"]}/>
            <TeamContainer id={["0", "2", "3", "4", "5", "6"]}/>
            <TeamContainer id={["1", "2", "3", "4", "5", "6"]}/>
        </div>
        Hello World!
    </div>
  );
}

export default App;
 
