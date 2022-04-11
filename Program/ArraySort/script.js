
// 10--Sorting the array
var a=[8,7,6,5,4,3,2,1];
console.log(a);
var b= a.length;
console.log(b);
var temp;
for(j=0;j<b-1;j++){
for(i=0;i<b;i++){
    if(a[i]>a[i+1]){
temp=a[i];
a[i]=a[i+1];
a[i+1]=temp;
    }
}

}
console.log(a);