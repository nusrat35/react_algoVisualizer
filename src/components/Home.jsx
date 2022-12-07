import { useState } from 'react';
import './Home.css';
import { bubbleSort } from './bubbleSort';
import { useEffect } from 'react';

const Home = () => {
    const initialArray = [29, 10, 14, 37, 12, 5, 50, 100];
    const [arr, setArr] = useState(initialArray);
    const [arrLen, setArrLen] = useState(initialArray.length);
    // const [bgColor, setBgColor] = useState('aqua');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
    }, [arr])

    const generateNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const createArray = () => {
        let arr = [];
        for (let i = 0; i < arrLen; i++) {
            arr[i] = generateNum(5, 100);
        }
        setArr(arr);
    }

    function callSort() {
        let copy = [...arr];
        let ans = bubbleSort(copy);
        setArr(ans);
    }

    let bars = arr.map((elem, i) => {
        return <div key={i} id={"id" + i} style={{ height: elem * 5, backgroundColor: 'aqua' }}>{(arr.length) < 50 ? elem : null}</div>
    })

    return (
        <div className="homeContainer">
            <label htmlFor="arrayLen">Array Length: </label>
            <input
                type="number"
                id="arrayLen"
                name="arrayLen"
                min="5" max="100"
                defaultValue={arrLen}
                onChange={(e) => setArrLen(e.target.value)}
            />
            <button id='array' onClick={createArray}>Create Random Array</button>
            <button id='sort' onClick={callSort} >Bubble Sort</button>

            <div className="chart">
                {bars}
            </div>
        </div>
    )
}
export default Home;