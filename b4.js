function cal(a,b,c){
    let cosC = (a*a+b*b-c*c)/(2*a*b);
    let sinC = Math.sqrt(1-cosC*cosC);
    console.log(1/2*a*b*sinC)
    return 1/2*a*b*sinC;
}
   cal(5,6,7)