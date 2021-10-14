import heightExtract from "../../Array/heightExtract";
const bubble =(arr) =>{
    
    let i,j; 
    let prev, next;
    for(i=0;i<arr.length-1;i++)
    {
        for(j=0; j<arr.length-i-1; j++)
        {
            
            [prev, next] = heightExtract(arr[j], arr[j+1]);
            
            if(next>prev)
            {             

                let t=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=t;
                
            }
        }
        // console.log(arr[i])
    }
    return arr;
}

export default bubble;