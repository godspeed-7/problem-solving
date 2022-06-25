function primeNumbers(x, y) {
    let isPrime = false;

    for (let j=x; j<=y; j++) {
        for(let i=2;i < j/2 ; i++) {
            if(j==1) {
                console.log(i);
                break;
            }
            if(j % i ==0) {
                isPrime = false;
                break;
            } else {
                isPrime =true;
            }
        }
        if(isPrime) {
            console.log("prime -> ",  j);
        }
    }



}

primeNumbers(1, 20);