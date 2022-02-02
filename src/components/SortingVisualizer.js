import React, { useEffect, useState } from 'react';
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
        const visualArray = array.slice();

        var timeout = 100;

        for(var i = 0; i < visualArray.length; i++) {
            for (var j = 0; j < (visualArray.length - i - 1); j++) {
                if(visualArray[j] > visualArray[j+1]) {
                    const currArr = document.getElementsByClassName("bar");

                    var temp = visualArray[j];
                    visualArray[j] = visualArray[j+1];
                    visualArray[j+1] = temp;

                    setTimeout(() => {
                        currArr[j].style.height = `${visualArray[j+1]}px`
                        currArr[j+1].style.height = `${temp}px`
                    }, timeout)

                    timeout += 100;
                }
            }
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