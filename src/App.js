import { Card } from 'react-bootstrap';
import './App.css';
import SearchPanel from './components/SearchPanel';

function App() {
  return (
    <div style={{padding:'1rem 1rem'}}>
      <Card style={{width: '22rem', margin: 'auto'}}>
        <Card.Body style={{ textAlign: 'center'}}>
          <Card.Title>
            <h2>
              Shopping List
            </h2>
          </Card.Title>
          <Card.Text>
            <SearchPanel/>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    
  );
}

export default App;
