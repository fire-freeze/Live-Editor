import React from 'react';

interface PropTypes {
    children?: React.ReactNode
}

const FooterContainer : React.FC <PropTypes> = ({children}) => {
  return (
    <div className="footer-container">
    {children}
    <footer> FOOTER </footer>
    </div>
  )
}
export default FooterContainer;