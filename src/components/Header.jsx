import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>
          <Link
            style={{ textDecoration: 'none', color: `${textColor}` }}
            to='/'
          >
            {text}
          </Link>
        </h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}
