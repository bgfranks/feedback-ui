import { useState } from 'react'
import FeedbackData from './data/FeedbackData'

//components
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'

function App() {
  const [feedback, setFeeback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
