export interface Persons {
    name: string,
    id: number,
    betAmount: number,
    customAmount: number|string,
}

export function customAmountHandler (e:React.ChangeEvent<HTMLInputElement>, chooseCard: Persons, chooseSetState: React.Dispatch<React.SetStateAction<Persons>>) {
    const cardUpdate = {...chooseCard};
    cardUpdate.customAmount = +e.target.value;
    chooseSetState(cardUpdate);
}

export interface Info {
    startingPoints: string | number,
    availablePoints: number | string,
}

export function startingPointsHandler(e:React.ChangeEvent<HTMLInputElement>, chooseRaceInfo: Info, chooseSetState: React.Dispatch<React.SetStateAction<Info>>) {
    const infoUpdate = {...chooseRaceInfo};
    infoUpdate.startingPoints = +e.target.value;
    infoUpdate.availablePoints = infoUpdate.startingPoints;
    chooseSetState(infoUpdate);
}