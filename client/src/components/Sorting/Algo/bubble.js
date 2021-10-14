const bubble = (arr) =>{
    
    let i,j;
    for(i=0;i<arr.length-1;i++)
    {
        for(j=0; j<arr.length-i-1; j++)
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