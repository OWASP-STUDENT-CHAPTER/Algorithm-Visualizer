const bubble = (arr) =>{
    
    let i,j;
    for(i=1;i<arr.length;i++)
    {
        for(j=1; j<arr.length-i-1; j++)
        {
            if(arr[j+1]>arr[j])
            {             
                let t=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=t;
            }
        }
    }
}

export default bubble;