
// 6--filtering negative number from array

function negativeFilter(a){
    var x=a.length;
    for(i=0;i<x;i++){
    if(a[i]<0){
    console.log(a[i]);
    }
    }
}
negativeFilter([1,3,-5,1,-3,-88]);


