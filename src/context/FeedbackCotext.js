import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // fetch feedback from json server
  const fetchFeedback = async () => {
    const res = await fetch('/feedback?_sort=id&_order=desc')
    const data = await res.json()

    setFeedback(data)
    setIsLoading(false)
  }

  // handles feedback deletion
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete the feedback?')) {
      await fetch(`feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // handles adding new feedback
  const addFeedback = async (newFeedback) => {
    // grabs the post response
    const res = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
    const data = await res.json()

    setFeedback([data, ...feedback])
  }

  //handles flagging the feedback for editing
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  // update the feedback
  const updateFeedback = async (id, updatedItem) => {
    // grabs the PUT response from the server
    const res = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })

    const data = await res.json()

    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...data,
            }
          : item
      )
    )

    // clears the edit flag
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
