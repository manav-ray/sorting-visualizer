import React, { useEffect, useState } from 'react';
import {bubbleSort} from './../algorithms/BubbleSort';
import {selectionSort} from './../algorithms/SelectionSort';
import {insertionSort} from './../algorithms/InsertionSort';
import {heapSort} from './../algorithms/HeapSort';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import './../styles.css'

export default function SortingVisualizer () {

    const [array, setArray] = useState([]);

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        initArray(height / 1.3, width / 15);


        function handleResize() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            initArray(height / 1.3, width / 15);
        }

        window.addEventListener('resize', handleResize);
    }, [])


    const bubbleSortVisualizer = () => {
        const animations = bubbleSort(array);

        for(let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName("bar");
            setTimeout(() => {
                const [barIdx1, barIdx2, barHeight1, barHeight2] = animations[i];

                bars[barIdx1].style.height = `${barHeight2}px`
                bars[barIdx2].style.height = `${barHeight1}px`

            }, i * 2)
        }
    }


    const selectionSortVisualizer = () => {
        const animations = selectionSort(array, array.length);

        for(let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName("bar");
            setTimeout(() => {
                const [barIdx1, barIdx2, barHeight1, barHeight2] = animations[i];

                bars[barIdx1].style.height = `${barHeight2}px`
                bars[barIdx2].style.height = `${barHeight1}px`

            }, i * 50)
        }
    }


    const insertionSortVisualizer = () => {
        const animations = insertionSort(array, array.length);

        for(let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName("bar");
            setTimeout(() => {
                const type = animations[i][0];

                if (type === 0) {
                    const barIdx1 = animations[i][1];
                    const barIdx2 = animations[i][2];
                    const barHeight1 = animations[i][3];
                    const barHeight2 = animations[i][4];
                    bars[barIdx1].style.height = `${barHeight2}px`
                    bars[barIdx2].style.height = `${barHeight1}px`
                }
                else {
                    const barIdx = animations[i][1];
                    const barHeight = animations[i][2];
                    bars[barIdx].style.height = `${barHeight}px`
                }

            }, i * 1)
        }
    }


    const heapSortVisualizer = () => {
        const animations = heapSort(array);

        for(let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName("bar");
            setTimeout(() => {
                const [barIdx, barHeight] = animations[i];

                bars[barIdx].style.height = `${barHeight}px`

            }, i * 50)
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
                <Button style={{marginBottom: '15px', marginRight: '10px'}} onClick={() => window.location.reload(false)}>Generate New Array</Button>
                <DropdownButton style={{marginRight: '10px'}} title="Select Algorithm">
                    <Dropdown.Item onClick={bubbleSortVisualizer}>Bubble Sort</Dropdown.Item>
                    <Dropdown.Item onClick={selectionSortVisualizer}>Selection Sort</Dropdown.Item>
                    <Dropdown.Item onClick={insertionSortVisualizer}>Insertion Sort</Dropdown.Item>
                    <Dropdown.Item onClick={heapSortVisualizer}>Heap Sort</Dropdown.Item>
                </DropdownButton>
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