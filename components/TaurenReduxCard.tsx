import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { plusFifty, customAmountConfirm } from '../store/taurenSlice'
import {customAmountHandler, Persons} from './CardInterface'
import '../styles/taurenCard.css'

const TaurenReduxCard = () => {
    const [taurenCard, setTaurenCard] = useState<Persons>(
            {name: 'Tauren', id: 3, betAmount: 0, customAmount: ''}
    )
    const currentBet = useSelector((state: RootState) => state.taurenBetAmount.taurenBetAmount);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='taurenCard'>
                <h1>Tauren</h1>
                <h2>Current Bet: <br></br>{currentBet}</h2>
                <div>
                    <button onClick={() => dispatch(plusFifty())}>+50</button>
                </div>
                <p>
                    Custom Amount <br></br> <input placeholder='Enter Custom Bet' value={taurenCard.customAmount} onChange={(e) => customAmountHandler(e, taurenCard, setTaurenCard)}/>
                    <br></br>
                    <button 
                        disabled={taurenCard.customAmount == '' ? true : false}
                        onClick={() => {
                            dispatch(customAmountConfirm(taurenCard.customAmount))
                            setTaurenCard({...taurenCard, customAmount: ''});
                        }}>Confirm
                    </button>
                </p>
            </div>
        </div>
    )
}

export default TaurenReduxCard