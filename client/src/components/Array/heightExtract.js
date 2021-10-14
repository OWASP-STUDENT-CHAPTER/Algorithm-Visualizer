const heightExtract =(arrp, arrn)=>
{
    let prev, next;
    prev = arrp.props.style.height;
    next = arrn.props.style.height;
    prev = prev.slice(0,prev.length - 2);
    next = next.slice(0, next.length - 2);
    prev = Number(prev);
    next = Number(next);

    return([prev, next]);
}

export default heightExtract;