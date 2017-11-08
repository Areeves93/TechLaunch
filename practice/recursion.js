// let par =[a,b,c,d,e,f];

// let que =[q,r,s,t,u,v];

// if(numb<=10){
//     return 0
// }
// if(numb % 10 !== 0){
//     numb=numb-(numb*10);
//     console.log(par[0],que[0])
//}

function mingle (q,p,n){
    return (p.length !== q.length) ?"I ainttt gon do it":

    (n===0) ? p.charAt(n) + q.charAt(n) + mingle(q,p,n-1)
    
}

console.log(mingle)