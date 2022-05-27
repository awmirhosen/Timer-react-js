//importing
import React, {useState} from "react";

const App = ()=> {
    // set the states---------
    const [time, setTime] = useState(0);
    const [timerOn, setTimeOn] = useState(false);

    //timerOn changes rendering
    React.useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() =>{
                setTime( prevTime => prevTime + 10 )
            }, 10)
        }else{
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [timerOn])

    return (
        <div className='App'>
            {/*show the time*/}
            <div>
               <div className='time-wrapper'>
                   <span>{('0' + Math.floor((time / 60000) % 60 )).slice(-2)} : </span>
                   <span>{('0' + Math.floor((time / 1000) % 60 )).slice(-2)} : </span>
                   <span>{('0' + Math.floor((time / 10) % 100 )).slice(-2)} </span>
               </div>
               {/*making buttons */}
               <div className='btn-wrapper'>
                <section>
                {!timerOn && time === 0 &&(
                    <button  className='start-btn'  onClick={ () => setTimeOn(true)}>Start</button>
                )}
                {timerOn &&(
                    <button  className='stop-btn'   onClick={ () => setTimeOn(false)}> Stop </button>
                )}
                {!timerOn && time !== 0 && (
                    <button  className='resume-btn' onClick={ () => setTimeOn(true)}> Resume </button>
                )}
                {!timerOn && time > 0 && (
                <button  className='reset-btn'  onClick={ () => setTime(0)}> Reset </button>
                )}
                </section>
            </div>
            </div>
        </div>
    )

}

export default App;