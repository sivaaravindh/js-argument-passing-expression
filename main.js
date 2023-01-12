//1.
num=(a=10,b=20,c=(a+b)/10)=>console.log(c);
num();

//2.
sum=(a1=10+20+18+2+30+20)=>console.log(a1);
sum();

//3.
sum2=(a=2,b=20,c=a/b)=>a+b-c;
console.log(sum2());

//4.
sum3=(a=10,b=20,c=a*b)=>console.log(c);
sum3();

//5.
sum4=(x=12,y=5,z=x+y)=>{
    return z
}
console.log(sum4(20));

//6.
sum4=(x=12,y=5,z=x+y)=>{
    
    return z
}
console.log(sum4(undefined));

//7.
sum5=(x=10,y=20,z=x**2+y**2)=>console.log(z);
sum5();

//8.
equ=(a=10,b=5,c=(a+b)**2)=>console.log(c);
equ();

//9.
equ1=(a=10,b=10,c=a-b)=>console.log(c);
equ1();

//10.
equ2=(a,b,d=(a+b)*(a-b))=>console.log(d);
equ2(10,20);