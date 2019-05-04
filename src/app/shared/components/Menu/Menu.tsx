import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Menu element in the DOM, who is outside from this app
const menuPortalRoot = document.getElementById('reactAppSideMenu');

class Menu extends React.Component {
  el: Element;

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    menuPortalRoot!.appendChild(this.el);
  }

  componentWillUnmount() {
    menuPortalRoot!.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Menu;
