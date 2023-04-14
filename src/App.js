import './App.css';
import First from './components/First'
import Second from './components/Second'
import Upper from './components/Upper'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <div className='container-fluid'>
        <div className='col text-center'>
          <div className='row-lg-6 mb-5'>
            <br /><br />
            <h1>RateMyDorm</h1>
            <br /><br /><br /><br /><br />
          </div>
          <div className='row-lg-6'>
            <div className='row'>
              <div className='col-lg-4'>
                <First />
              </div>
              <div className='col-lg-4'>
                <Second />
              </div>
              <div className='col-lg-4'>
                <Upper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
