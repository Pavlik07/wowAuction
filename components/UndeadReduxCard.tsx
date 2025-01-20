import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { plusFifty, customAmountConfirm } from '../store/undeadSlice'
import {customAmountHandler, Persons} from './CardInterface'
import '../styles/undeadCard.css'

const UndeadReduxCard = () => {
    const [undeadCard, setUndeadCard] = useState<Persons>(
            {name: 'Undead', id: 4, betAmount: 0, customAmount: ''}
    )
    const currentBet = useSelector((state: RootState) => state.undeadBetAmount.undeadBetAmount);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='undeadCard'>
                <h1>Undead</h1>
                <h2>Current Bet: <br></br>{currentBet}</h2>
                <div>
                    <button onClick={() => dispatch(plusFifty())}>+50</button>
                </div>
                <p>
                    Custom Amount <br></br> <input placeholder='Enter Custom Bet' value={undeadCard.customAmount} onChange={(e) => customAmountHandler(e, undeadCard, setUndeadCard)}/>
                    <br></br>
                    <button 
                        disabled={undeadCard.customAmount == '' ? true : false}
                        onClick={() => {
                            dispatch(customAmountConfirm(undeadCard.customAmount))
                            setUndeadCard({...undeadCard, customAmount: ''});
                        }}>Confirm
                    </button>
                </p>
            </div>
        </div>
    )
}

export default UndeadReduxCard