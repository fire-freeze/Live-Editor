import './App.css';
import AppContainer from './components/containers/AppContainer';
import { ModalState } from '../src/context/modalContext';
import { ExplorerState } from '../src/context/explorerContext';

function App() {
 return (
  <div className="App">
    <ModalState>
     <ExplorerState>
      <AppContainer />
     </ExplorerState>
    </ModalState>
  </div>
 );
}

export default App;
