import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback to display!</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              rating={item.rating}
              text={item.text}
              handleDelete={handleDelete}
              id={item.id}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

    // return (
    //   <div className='feedback-list'>
    //     {feedback.map((item) => (
    //       <FeedbackItem
    //         key={item.id}
    //         rating={item.rating}
    //         text={item.text}
    //         handleDelete={handleDelete}
    //         id={item.id}
    //       />
    //     ))}
    //   </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList
