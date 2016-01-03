import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import '../styles/core.scss'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Statelesss Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of it's props, so we can
// define it with a plain javascript function...

const ZNavbar = ({ history }) => {
  return (
    <Navbar inverse style={{ borderRadius: 0 }}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='/' onClick={
            (e) => {
              e.preventDefault()
              history.pushState(null, '/')
            }
          }>ZGTIN</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href='/about' onClick={
            (e) => {
              e.preventDefault()
              history.pushState(null, '/about')
            }
          }>About</NavItem>
          <NavDropdown eventKey={2} title='Dropdown' id='basic-nav-dropdown'>
            <MenuItem eventKey={2.1} onClick={
            (e) => {
              e.preventDefault()
              history.pushState(null, '/about')
            }
          }>Action</MenuItem>
            <MenuItem eventKey={2.2}>Another action</MenuItem>
            <MenuItem eventKey={2.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const CoreLayout = ({ history, children }) => {
  return (
    <div className='page-container'>
      <ZNavbar history={ history } />
      <div className='view-container'>
        {children}
      </div>
    </div>
  )
}

CoreLayout.propTypes = {
  children: React.PropTypes.element
}

export default CoreLayout
