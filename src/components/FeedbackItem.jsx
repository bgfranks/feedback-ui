import PropTypes from 'prop-types'

import Card from './shared/Card'

function FeedbackItem({ text, rating }) {
  return (
    <Card reverse={true}>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  text: PropTypes.string,
  rating: PropTypes.number,
}

export default FeedbackItem
