import './App.css'
import { GitHubCard } from './GitHubCard/GitHubCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div className="App pt-1" >
      <Row>
        <Col style={{display: 'flex', justifyContent: 'left'}}>
          <GitHubCard />
        </Col>
      </Row>
    </div>
  )
}

export default App
