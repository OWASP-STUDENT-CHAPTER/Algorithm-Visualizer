import styles from './Sorting.module.css';
import Array from '../Array/Array';
import SideBar from './SideBar';
import TopBar from './TopBar';
import { useState } from 'react';


const Sort= () =>{

    const [arrSize,setArrSize]= useState(10);
    const sizeHandler = () =>{
        const x= Math.floor(Math.random() * 80);
        setArrSize(x);
    }
    const [algo,setAlgo]= useState(0);

    return(
        <div className={styles.sorting}>
            <SideBar choice={(x)=>setAlgo(x)} />
            
            <div className={styles.view}>
                {/* animation with array bars */}
                <TopBar clickHandler={sizeHandler} />

                <div className={styles.array}>
                    <Array size={arrSize} algoChoice={algo} />
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