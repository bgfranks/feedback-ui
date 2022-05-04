import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackCotext'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

import Card from './shared/Card'

function FeedbackItem({ text, rating, id }) {
  const { deleteFeedback } = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button onClick={() => deleteFeedback(id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  text: PropTypes.string,
  rating: PropTypes.number,
}

export default FeedbackItem
