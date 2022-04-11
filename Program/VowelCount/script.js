
//8-- VowelCount
var x="Vishal Kumar";
var y=x.length;
function vowel(x){
    var y=x.length;
    var j=0;
for(i=0;i<y;i++){
    if(x[i]==="a"||x[i]==="e"||x[i]==="i"||x[i]==="o"||x[i]==="u"||x[i]==="A"||x[i]==="E"||x[i]==="I"||x[i]==="O"||x[i]==="U"){
j++;
    }
}
console.log(j);
}
vowel("Vishal Kumar");
