import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { plusFifty, customAmountConfirm } from '../store/orcSlice'
import {customAmountHandler, Persons} from './CardInterface'
import '../styles/orcCard.css'

const OrcReduxCard = () => {
    const [orcCard, setOrcCard] = useState<Persons>(
            {name: 'Orc', id: 1, betAmount: 0, customAmount: ''}
    )
    const currentBet = useSelector((state: RootState) => state.orcBetAmount.orcBetAmount);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='orcCard'>
                <h1>Orc</h1>
                <h2>Current Bet: <br></br>{currentBet}</h2>
                <div>
                    <button onClick={() => dispatch(plusFifty())}>+50</button>
                </div>
                <p>
                    Custom Amount <br></br> <input placeholder='Enter Custom Bet' value={orcCard.customAmount} onChange={(e) => customAmountHandler(e, orcCard, setOrcCard)}/>
                    <br></br>
                    <button 
                        disabled={orcCard.customAmount == '' ? true : false}
                        onClick={() => {
                            dispatch(customAmountConfirm(orcCard.customAmount));
                            setOrcCard({...orcCard, customAmount: ''});
                        }
                    }>Confirm</button>
                </p>
            </div>
        </div>
    )
}

export default OrcReduxCard