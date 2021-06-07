function primeNumbers(x, y) {
    let isPrime = false;

    for (let j=x; j<=y; j++) {
        for(let i=2;i < j/2 ; i++) {
            console.log("here");
            if(j==1) {
                console.log(i);
                break;
            }
            if(n % i ==0) {
                isPrime = false
                // break;
            } else {
                isPrime =true;
            }
        }
        if(isPrime) {
            console.log("prime -> ",  n);
        }
    }



}

primeNumbers(x, y);