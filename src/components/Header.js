import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd, showAdd}) => {
  return (
    <header className = 'header'>
        <h1>{title}</h1>
        <Button color= {showAdd ? 'Red' : 'Green'}
         text={showAdd ? 'Close' : 'Add'}
          onClick= {onAdd} />
        {/* <Button color= 'green' text='Add'/>
        <Button color= 'red' text='Remove'/> */}
    </header>
  )
}
Header.defaultProps = {
  title: 'Task Tracker',
}
Header.propTypes = {
  title: PropTypes.string
}

// const headingStyle = {
//   color: 'blue',
//   backgroundColor: 'Black'
// }
export default Header
