import styles from './Sorting.module.css';
import Array from '../Array/Array';
import { useState } from 'react';


const Sort= () =>{

    const [arrSize,setArrSize]= useState(10);
    const sizeHandler = () =>{
        const x= Math.floor(Math.random() * 100);
        setArrSize(x);
    }

    return(
        <div className={styles.sorting}>
            <div className={styles.sortOption}>
                <div className="container">
                    <h2>Sorting Algorithm</h2>
                    <button>Bubble Sort</button> <br/>
                    <button>Insertion Sort</button> <br/>
                    <button>Selection Sort</button> <br/>
                    <button>Merge Sort</button> <br/>
                    <button>Quick Sort</button> 
                </div>
            </div>
            <div className={styles.view}>
                {/* animation with array bars */}
            
                <div className={styles.topnav}>
                    {/* top navbar for array settings- size and speed */}
                    <button onClick={sizeHandler}>New Array</button>
                    <button>Speed</button>
                </div>
                <div className="container">
                    <Array size={arrSize}/>
                </div>
            </div>
            <div className={styles.code}>
                {/* code for the algo */}
                <h2>Algo code</h2>
            </div>
        </div>
    );
}

export default Sort;