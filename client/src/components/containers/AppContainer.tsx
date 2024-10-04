import { useContext } from 'react';
import { modalContext } from '../../context/modalContext';
import EditorContainer from '../containers/EditorContainer';
import Modal from '../modal-components/Modal';
import FooterContainer from './FooterContainer';

import HeaderContainer from './HeaderContainer';
export default function AppContainer() {
 const context = useContext(modalContext);
 if (!context) throw new Error('not found');
 const { modalState } = context;
 return (
  <div className="app-container align-column">
   <HeaderContainer />
   <EditorContainer />
   <FooterContainer />
   <Modal show_modal={modalState.show_modal}>{modalState.child}</Modal>
  </div>
 );
}
