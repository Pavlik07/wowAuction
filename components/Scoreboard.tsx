import React, { useState } from 'react'
import '../styles/scoreboard.css'
import {Info, startingPointsHandler} from './CardInterface'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { orcStartingPointsOk } from '../store/orcSlice'
import { trollStartingPointsOk } from '../store/trollSlice'
import { taurenStartingPointsOk } from '../store/taurenSlice'
import { undeadStartingPointsOk } from '../store/undeadSlice'

function Scoreboard() {
    const [orcInfo, setOrcInfo] = useState<Info>(
        {startingPoints: '', availablePoints: ''}
    )
    const [trollInfo, setTrollInfo] = useState<Info>(
        {startingPoints: '', availablePoints: ''}
    )
    const [taurenInfo, setTaurenInfo] = useState<Info>(
        {startingPoints: '', availablePoints: ''}
    )
    const [undeadInfo, setUndeadInfo] = useState<Info>(
        {startingPoints: '', availablePoints: ''}
    )

    const orcAvailablePoints = useSelector((state: RootState) => state.orcBetAmount.orcAvailablePoints);
    const trollAvailablePoints = useSelector((state: RootState) => state.trollBetAmount.trollAvailablePoints);
    const taurenAvailablePoints = useSelector((state: RootState) => state.taurenBetAmount.taurenAvailablePoints);
    const undeadAvailablePoints = useSelector((state: RootState) => state.undeadBetAmount.undeadAvailablePoints);
    const dispatch = useDispatch();
    
    return (
        <>
        <div className='scoreboard'>
            <div className='orcScoreBoard'>
                <p>Orc</p>
                <p>Available Points: {orcAvailablePoints}</p>
                <p>Starting Points: <input 
                    className='startingPointsInput'
                    placeholder='Amount' 
                    value={orcInfo.startingPoints}
                    onChange={(e) => startingPointsHandler(e,orcInfo,setOrcInfo)}
                    />
                    <button className='okBtn' onClick={() => {
                        if(orcInfo.startingPoints === '') {orcInfo.availablePoints = 0}
                        else dispatch(orcStartingPointsOk(orcInfo.startingPoints));
                    }}>OK</button>
                </p>
            </div>
            <div className='trollScoreBoard'>
                <p>Troll</p>
                <p>Available Points: {trollAvailablePoints}</p>
                <p>Starting Points: <input 
                    className='startingPointsInput'
                    placeholder='Amount' 
                    value={trollInfo.startingPoints}
                    onChange={(e) => startingPointsHandler(e,trollInfo,setTrollInfo)}
                />
                <button className='okBtn' onClick={() => {
                    if(trollInfo.startingPoints === '') {trollInfo.availablePoints = 0}
                    else dispatch(trollStartingPointsOk(trollInfo.startingPoints));
                }}>OK</button>
                </p>
            </div>
            <div className='taurenScoreBoard'>
                <p>Tauren</p>
                <p>Available Points: {taurenAvailablePoints}</p>
                <p>Starting Points: <input 
                    className='startingPointsInput'
                    placeholder='Amount' 
                    value={taurenInfo.startingPoints}
                    onChange={(e) => startingPointsHandler(e,taurenInfo,setTaurenInfo)}
                />
                <button className='okBtn' onClick={() => {
                    if(taurenInfo.startingPoints === '') {taurenInfo.availablePoints = 0}
                    else dispatch(taurenStartingPointsOk(taurenInfo.startingPoints));
                }}>OK</button>
                </p>
            </div>
            <div className='undeadScoreBoard'>
                <p>Undead</p>
                <p>Available Points: {undeadAvailablePoints}</p>
                <p>Starting Points: <input 
                    className='startingPointsInput'
                    placeholder='Amount' 
                    value={undeadInfo.startingPoints}
                    onChange={(e) => startingPointsHandler(e,undeadInfo,setUndeadInfo)}
                />
                <button className='okBtn' onClick={() => {
                    if(undeadInfo.startingPoints === '') {undeadInfo.availablePoints = 0}
                    else dispatch(undeadStartingPointsOk(undeadInfo.startingPoints));
                }}>OK</button>
                </p>
            </div>
        </div>
        </>
    )
}

export default Scoreboard