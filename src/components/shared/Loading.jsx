import spinner from '../../assets/spinner.gif'

export default function Loading() {
  return (
    <img
      src={spinner}
      alt='loading...'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  )
}
