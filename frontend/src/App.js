import FreshIdeas from './components/Ideas/FreshIdeas';
import ListOfIdeas from './components/Ideas/ListOfIdeas';
import AchievementsList from './components/Achievements/AchievementsList';
import CompletedList from './components/Completed/CompletedList';
import './App.css';
import { Container } from '@mui/system';
import Requests from './components/Requests';


function App() {
  return (
    <div className="App">
      <Container className='wrapper' maxWidth="lg">
        <FreshIdeas />
        <Requests />
        <ListOfIdeas />
        <AchievementsList />
        <CompletedList />
      </Container>
    </div>

  )
}

export default App;
