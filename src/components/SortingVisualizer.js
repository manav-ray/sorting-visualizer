import React, { useEffect, useState } from 'react';
import {bubbleSort} from './../algorithms/BubbleSort';
import { Button } from 'react-bootstrap';
import './../styles.css'

export default function SortingVisualizer () {

    const [array, setArray] = useState([]);

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        initArray(height / 1.2, width / 10);


        function handleResize() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            initArray(height / 1.2, width / 10);
        }

        window.addEventListener('resize', handleResize);
    }, [])


    const bubbleSortVisualizer = () => {
        const animations = bubbleSort(array);

        for(let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName("bar");

            setTimeout(() => {
                const [barIdx, barHeight] = animations[i];
                bars[barIdx].style.height = `${barHeight}px`
                bars[barHeight].style.height = `${barIdx}px`
            }, i * 10)
        }
    }



    const initArray = (height, width) => {
        const tempArray = [];

        for(var i = 0; i < width; i++) {
            const rand = Math.floor(Math.random() * (height - 5 + 1) + 5);
            tempArray.push(rand);
        }

        setArray(tempArray);
    }


    return (
        <div>
            <div className="btn-container">
                <Button style={{marginBottom: '15px', marginRight: '10px'}} onClick={() => initArray(window.innerHeight / 1.2, window.innerWidth / 10)}>Generate New Array</Button>
                <Button style={{marginBottom: '15px', marginRight: '10px'}} onClick={bubbleSortVisualizer}>Bubble Sort</Button>
            </div>

            <div className="container">
                { array.map((value, index) => (
                    <div className="bar" 
                        key={index}
                        style={{
                            height: `${value}px`,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}