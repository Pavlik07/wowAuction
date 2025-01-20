import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { plusFifty, customAmountConfirm } from '../store/trollSlice'
import {customAmountHandler, Persons} from './CardInterface'
import '../styles/trollCard.css'

const TrollReduxCard = () => {
    const [trollCard, setTrollCard] = useState<Persons>(
            {name: 'Troll', id: 2, betAmount: 0, customAmount: ''}
    )
    const currentBet = useSelector((state: RootState) => state.trollBetAmount.trollBetAmount);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='trollCard'>
                <h1>Troll</h1>
                <h2>Current Bet: <br></br>{currentBet}</h2>
                <div>
                    <button onClick={() => dispatch(plusFifty())}>+50</button>
                </div>
                <p>
                    Custom Amount <br></br> <input placeholder='Enter Custom Bet' value={trollCard.customAmount} onChange={(e) => customAmountHandler(e, trollCard, setTrollCard)}/>
                    <br></br>
                    <button 
                        disabled={trollCard.customAmount == '' ? true : false}
                        onClick={() => {
                            dispatch(customAmountConfirm(trollCard.customAmount))
                            setTrollCard({...trollCard, customAmount: ''});
                        }}>Confirm
                    </button>
                </p>
            </div>
        </div>
    )
}

export default TrollReduxCard