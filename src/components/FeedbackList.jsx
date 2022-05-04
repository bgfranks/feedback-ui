import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackCotext'
import { motion, AnimatePresence } from 'framer-motion'

import FeedbackItem from './FeedbackItem'
import Loading from './shared/Loading'

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback to display!</p>
  }

  return isLoading ? (
    <Loading />
  ) : (
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
              id={item.id}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
