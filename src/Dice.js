import React, {useState} from 'react';

function Dice() {
    const [score, setScore] = useState({
        dice1: 0,
        dice2: 0,
        total:0
    });

    const {dice1, dice2, total} = score;

    const drowDice = () => {
        let score1 = Math.floor(Math.random() * 6 + 1);
        let score2 = Math.floor(Math.random() * 6 + 1);
        let sum = score1+score2;
        setScore({
            ...score,
            dice1 : score1,
            dice2 : score2,
            total : sum
        })
    };

    const init = () =>{
        setScore({
            dice1 : 0,
            dice2 : 0,
            total : 0
        })
    }

    return (
        <div className="content">
            <div className="diceArea">
                <div className="dice">{dice1}</div>
                <div className="dice">{dice2}</div>
            </div>

            <div className="total"><b>점수 :</b>{total}</div>
            <button onClick={drowDice}>주사위던지기</button>
            <button onClick={init}>초기화</button>
        </div>
    )
}

export default Dice;
