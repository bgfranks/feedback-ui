import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

export default function About() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>This is a React app for leaving feedback for a product or a service</p>
      <p>Version: 1.0.0</p>
      <p style={{ paddingTop: '5%' }}>
        <Link style={{ textDecoration: 'none', color: '#ff6a95' }} to='/'>
          Back To Home
        </Link>
      </p>
    </Card>
  )
}
