import { useState } from 'react'
import Button from './shared/Button'

import Card from './shared/Card'

export default function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [errMessage, setErrMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setErrMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setErrMessage('Please leave a review of 10 or more characters')
    } else {
      setErrMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service?</h2>
        {/* todo rating select component */}
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {errMessage && <div className='message'>{errMessage}</div>}
      </form>
    </Card>
  )
}
