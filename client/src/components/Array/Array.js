import styles from './Array.module.css';

const Array = (props) =>{

    var arr=[],i;
    for(i=0 ;i < props.size ;i++)
    {
        var x= Math.floor( Math.random() * 200);
        arr[i]=x;
    }
    console.log(arr.length);
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