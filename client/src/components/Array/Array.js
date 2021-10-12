import styles from './Array.module.css';
import bubble from '../Sorting/Algo/bubble';

const Array = (props) =>{

    //array size
    let arr=[],i;
    for(i=0 ;i < 50 ;i++) //add props.size
    {
        let x= Math.floor( Math.random() * 200);
        arr[i]=x;
    }

    //height swap function
    const swap = (a,b) =>{
        const s1= getComputedStyle(a).getPropertyValue("height");
        const s2= getComputedStyle(b).getPropertyValue("height");
        a.style.height=s2;
        b.style.height=s1;
    } 

    if(props.algoChoice === 1)
    {
        bubble(arr);
    }

    return (
        <div className={styles.bars}>
        {
         
            arr.map((a)=>{
                return(
                    <div className={styles.bar}
                    style={{height:`${a}px`}}>
                    </div>
                )
            })     
        }            
        </div>
    );
}

export default Array;