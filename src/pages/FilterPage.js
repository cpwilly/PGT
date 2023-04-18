import './FilterPage.css';
import First from '../components/First'
import Second from '../components/Second'
import Upper from '../components/Upper'

function FilterPage(props) {
  return (
    <>
    <div className='container-fluid'>
        <div className='col text-center'>
          <div className='row-lg-6 mb-5'>
            <h1 id='siteName' className = 'heading'>RateMyDorm</h1>
          </div>
          <div className='row-lg-6'>
            <div className='row'>
              <div className='col-lg-4'> 
                <First setSelected={props.setSelected}/>
              </div>
              <div className='col-lg-4'>
                <Second setSelected={props.setSelected}/>
              </div>
              <div className='col-lg-4'>
                <Upper setSelected={props.setSelected}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterPage;