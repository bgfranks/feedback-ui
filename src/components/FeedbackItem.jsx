import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackCotext'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'

import Card from './shared/Card'

function FeedbackItem(item) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  text: PropTypes.string,
  rating: PropTypes.number,
}

export default FeedbackItem
