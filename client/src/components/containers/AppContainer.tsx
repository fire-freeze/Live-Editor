import { useContext } from 'react';
import { modalContext } from '../../context/modalContext';
import EditorContainer from '../containers/EditorContainer';
import Modal from '../modal-components/Modal';

import HeaderContainer from './HeaderContainer';
export default function AppContainer() {
 const context = useContext(modalContext);
 if (!context) throw new Error('not found');
 const { modalState } = context;
 return (
  <div className="app-container align-column">
   <HeaderContainer />
   <EditorContainer />
   <Modal show_modal={modalState.show_modal} style={modalState.style}>{modalState.child}  </Modal>
  </div>
 );
}
