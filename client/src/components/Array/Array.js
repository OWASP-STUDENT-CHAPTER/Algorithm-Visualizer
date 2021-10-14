import styles from './Array.module.css';
import bubble from '../Sorting/Algo/bubble';
import { useState } from 'react';

const Array = (props) =>{

    //array size
    let arr=[],i;
    for(i=0 ;i < 50 ;i++) //add props.size
    {
        let x= Math.floor( Math.random() * 400);
        arr[i]=x;
    }


    let arrayOfDivs = arr.map((a,index)=>{
        return(
            <div className={styles.bar}
            key={index}
            style={{height:`${a}px`,
            background:'black'}}>
            </div>
        )
    });    

    
    if(props.algoChoice === 1)
    {
        bubble(arrayOfDivs);
    }

    return (
        <div className={styles.bars}>
        {/* {
         
            arr.map((a)=>{
                return(
                    <div className={styles.bar}
                    style={{height:`${a}px`}}>
                    </div>
                )
            })     
        }             */}
        {
            arrayOfDivs
        }
        </div>
    );
}

export default Array;