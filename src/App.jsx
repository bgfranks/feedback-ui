import { useState } from 'react'
import FeedbackData from './data/FeedbackData'

//components
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'

function App() {
  const [feedback, setFeeback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete the feedback?')) {
      setFeeback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
