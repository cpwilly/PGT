import * as React from 'react';
import AddReview from './AddReview';
import Box from '@mui/system/Box';
import './AggregatedReviews.css';
import ReadOnlyRating from './ReadOnlyRating';


function calculatePercentage(value, total){
    let percent = (value/total) * 100;

    return percent + '%';
}

export default function AggregatedReviews(props) {


    return (
        <div>
            <div className='row'>
                <div className='col-lg-8'>
                    <span className="heading">Dorm Rating</span>
                    <ReadOnlyRating rating={props.rating}/>
                    <p>{props.rating} average based on {props.numReviews} reviews.</p>
                </div>
                <div className='col-lg-4'>
                    <Box sx={{ pt: 2, ml: 12 }}>
                        < AddReview email={props.email} dormName={props.dormName}  dbSend={props.dbSend} setDbSend={props.setDbSend}/>
                    </Box>
                </div>
            </div>
            <hr style={{ border: '3px solid #f1f1f1' }} />
            <Box sx={{mb:3}}>
                <div className="row">
                    <div className="side">
                        <div>5 star</div>
                    </div>
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-5" style={{width: calculatePercentage(props.numEach[0], props.numReviews)}}></div>
                        </div>
                    </div>
                    <div className="side right">
                        <div>{props.numEach[0]}</div>
                    </div>
                    <div className="side">
                        <div>4 star</div>
                    </div>
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-4" style={{width: calculatePercentage(props.numEach[1], props.numReviews)}}></div>
                        </div>
                    </div>
                    <div className="side right">
                        <div>{props.numEach[1]}</div>
                    </div>
                    <div className="side">
                        <div>3 star</div>
                    </div>
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-3" style={{width: calculatePercentage(props.numEach[2], props.numReviews)}}></div>
                        </div>
                    </div>
                    <div className="side right">
                        <div>{props.numEach[2]}</div>
                    </div>
                    <div className="side">
                        <div>2 star</div>
                    </div>
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-2" style={{width: calculatePercentage(props.numEach[3], props.numReviews)}}></div>
                        </div>
                    </div>
                    <div className="side right">
                        <div>{props.numEach[3]}</div>
                    </div>
                    <div className="side">
                        <div>1 star</div>
                    </div>
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-1" style={{width: calculatePercentage(props.numEach[4], props.numReviews)}}></div>
                        </div>
                    </div>
                    <div className="side right">
                        <div>{props.numEach[4]}</div>
                    </div>
                </div>
            </Box>
        </div>
    );
}