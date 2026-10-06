import Fejlec from './components/1fejlec';
import Bevezeto from './components/2bevezeto';
import Lista from './components/3lista';
import Allatok from './components/4allatok';
import Kartya from './components/5kartyak';
import Megjegyzes from './components/6megjegyzes';
import Lablec from './components/7lablec';

function App() {
  return (
    <>
    <div className="container">
      <Fejlec />
      <Bevezeto />
      <Lista />
      <Allatok />
      <Kartya />
      <Megjegyzes />
      <Lablec />      
    </div>

    </>
  )
}

export default App
