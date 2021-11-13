var arr1=[6,2,6,9,6,7,1,2,77,11,57];
var arr2=[]; 
var min=arr1[0];
var pos;
var max=arr1[0];

for (i=0; i<arri.length; i++)
{
    if (max<arr1[i]) max=arri[i];
}

for (var i=0;i<arr1.length; i++)
{
   for (var j=0;j<arr1.length; j++)
   {
          if (arri[j]!="x")
            {
               if (min>arr1[1])
                 {
                      min=arri[j]; 
                      pos=j;
                 }    
            } 
    }        
     arr2[i]=min;
     arr1[pos]="x";
     min=max;    
}
console.log(arr2);