import React, { useState } from 'react'
import '../styles/infoLine.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { orcGoesToConfirm, orcBetNull } from '../store/orcSlice'
import { trollGoesToConfirm, trollBetNull } from '../store/trollSlice'
import { taurenGoesToConfirm, taurenBetNull } from '../store/taurenSlice'
import { undeadGoesToConfirm, undeadBetNull } from '../store/undeadSlice'

function InfoLine() {
    const [lotName, setLotName] = useState<string|number>('')
    const [races, setRaces] = useState<string>('Orc');
    const [result, setResult] = useState<string[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [usedLotNames, setUsedLotNames] = useState<(string|number)[]>([]);
  
    const orcCurrentBet = useSelector((state: RootState) => state.orcBetAmount.orcBetAmount);
    const trollCurrentBet = useSelector((state: RootState) => state.trollBetAmount.trollBetAmount);
    const taurenCurrentBet = useSelector((state: RootState) => state.taurenBetAmount.taurenBetAmount);
    const undeadCurrentBet = useSelector((state: RootState) => state.undeadBetAmount.undeadBetAmount);
    const dispatch = useDispatch();

    let isLotNamePresent = usedLotNames.find(e => e == lotName);
    
    function lotNameChange(e:React.ChangeEvent<HTMLInputElement>) {
        setLotName(e.target.value);
    }
    function assignRaceChange(e:React.ChangeEvent<HTMLSelectElement>) {
        setRaces(e.target.value);
    }
    function confirmClick() {
        if(races === 'Orc' && orcCurrentBet <= trollCurrentBet ||
            races === 'Orc' && orcCurrentBet <= taurenCurrentBet ||
            races === 'Orc' && orcCurrentBet <= undeadCurrentBet) {
                setErrorMsg(`Orcs didn't place the highest bet, check the highest bidder`);
        }
        else if(races === 'Troll' && trollCurrentBet <= orcCurrentBet  ||
                races === 'Troll' && trollCurrentBet <= taurenCurrentBet  ||
                races === 'Troll' && trollCurrentBet <= undeadCurrentBet) {
                    setErrorMsg(`Trolls didn't place the highest bet, check the highest bidder`);
                }
        else if(races === 'Tauren' && taurenCurrentBet <= orcCurrentBet  ||
                races === 'Tauren' && taurenCurrentBet <= trollCurrentBet  ||
                races === 'Tauren' && taurenCurrentBet <= undeadCurrentBet) {
                    setErrorMsg(`Taurens didn't place the highest bet, check the highest bidder`);
        }
        else if(races === 'Undead' && undeadCurrentBet <= orcCurrentBet  ||
                races === 'Undead' && undeadCurrentBet <= taurenCurrentBet  ||
                races === 'Undead' && undeadCurrentBet <= trollCurrentBet) {
                    setErrorMsg(`Undead didn't place the highest bet, check the highest bidder`);
        }
        else if(usedLotNames.length !== 0 && isLotNamePresent) {
            setErrorMsg(`Lot name already exists, choose a diffirent name`)
        }
        else if(races === 'Orc' && lotName !== '' && usedLotNames.map(e => e !== lotName)) {
            dispatch(orcGoesToConfirm());
            setResult(result.concat(`${races} won lot ${lotName} for ${orcCurrentBet} points`))
            dispatch(orcBetNull()); dispatch(trollBetNull()); dispatch(taurenBetNull()); dispatch(undeadBetNull());
            setLotName('');
            setErrorMsg('');
            setUsedLotNames(() => [...usedLotNames.concat(lotName)]);
        }
        else if(races === 'Troll' && lotName !== '' && usedLotNames.map(e => e !== lotName)) {
            dispatch(trollGoesToConfirm())
            setResult(result.concat(`${races} won lot ${lotName} for ${trollCurrentBet} points`))
            dispatch(orcBetNull()); dispatch(trollBetNull()); dispatch(taurenBetNull()); dispatch(undeadBetNull());
            setLotName('');
            setErrorMsg('');
            setUsedLotNames(() => [...usedLotNames.concat(lotName)]);
        }
        else if(races === 'Tauren' && lotName !== '' && usedLotNames.map(e => e !== lotName)) {
            dispatch(taurenGoesToConfirm())
            setResult(result.concat(`${races} won lot ${lotName} for ${taurenCurrentBet} points`))
            dispatch(orcBetNull()); dispatch(trollBetNull()); dispatch(taurenBetNull()); dispatch(undeadBetNull());
            setLotName('');
            setErrorMsg('');
            setUsedLotNames(() => [...usedLotNames.concat(lotName)]);
        }
        else if(races === 'Undead' && lotName !== '' && usedLotNames.map(e => e !== lotName)) {
            dispatch(undeadGoesToConfirm());
            setResult(result.concat(`${races} won lot ${lotName} for ${undeadCurrentBet} points`))
            dispatch(orcBetNull()); dispatch(trollBetNull()); dispatch(taurenBetNull()); dispatch(undeadBetNull());
            setLotName('');
            setErrorMsg('');
            setUsedLotNames(() => [...usedLotNames.concat(lotName)]);
        }
        else if(lotName === '') setErrorMsg('You forgot to NAME the LOT'); 
    }

    return (
        <div>
            <div className='infoLine'>
                The lot 
                <input className='lotName' value={lotName} onChange={(e) => lotNameChange(e)} placeholder='Give a unique Name'></input> 
                goes to
                <select className='raceValue' value={races} onChange={(e) => assignRaceChange(e)}>
                    <option value='Orc'>Orc</option>
                    <option value='Troll'>Troll</option>
                    <option value='Tauren'>Tauren</option>
                    <option value='Undead'>Undead</option>
                </select>
                <button onClick={confirmClick}>Confirm</button>
                <p className='errorMsg'>{errorMsg}</p>
                <div>
                    <ol>
                        {result.map(el => <li key={Math.random()}>{el}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default InfoLine