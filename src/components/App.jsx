import React from 'react'
import Carousel from './Carousel'

const App = () => {
  
  const [ currentPerson, setCurrentPerson ] = React.useState(7)

  return (
    <main>
      <Carousel currentPerson={currentPerson} setCurrentPerson={setCurrentPerson} />
    </main>
  );
};
export default App;
  