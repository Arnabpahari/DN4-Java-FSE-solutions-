import logo from './logo.svg';
import './App.css';
import { CohortsData} from './Cohort'
import CohortDetails from './CohortDetails'; 

function App() {
 
  return (
  <div>
    <h1>Cohorts Details</h1>
    <div className="cohort-container">
        {CohortsData.map(cohort => <CohortDetails cohort={cohort} />)}
      </div>
  </div>
  );
}

export default App;
