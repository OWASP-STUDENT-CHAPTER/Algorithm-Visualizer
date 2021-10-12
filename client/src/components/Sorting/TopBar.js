import styles from './Sorting.module.css';

const TopBar = (props) =>{
    return (
        <div className={styles.topnav}>
            <button onClick={props.clickHandler}>New Array</button>
            <button>Speed</button>
        </div>
    );
}

export default TopBar;