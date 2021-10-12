import styles from './Sorting.module.css';
import { useState } from 'react';

const SideBar = (props) =>{

    const [x,setX]=useState(0);
    const choiceHandler = (x) =>{
        setX(x);
    }
    props.choice(x);

    return(
        <div className={styles.sortOption}>
            <div className="container">
                <h2>Sorting Algorithm</h2>
                <button onClick={()=>choiceHandler(1)} >Bubble Sort</button> <br/>
                <button onClick={()=>choiceHandler(2)}>Insertion Sort</button> <br/>
                <button onClick={()=>choiceHandler(3)}>Selection Sort</button> <br/>
                <button onClick={()=>choiceHandler(4)}>Merge Sort</button> <br/>
                <button onClick={()=>choiceHandler(5)}>Quick Sort</button> 
            </div>
        </div>
    );
}

export default SideBar;