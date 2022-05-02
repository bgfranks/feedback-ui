import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

import Card from './shared/Card'

function FeedbackItem({ text, rating, id, handleDelete }) {
  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button onClick={() => handleDelete(id)} className='close'>
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
