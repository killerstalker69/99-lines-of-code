let friends = ["julia", "dani", "jo", "cali", "bae"];
    for (let i = 0; i < friends.length; i++){
        let name = friends[i];
        for (let x = 99; x > 0; x--){
            if (x > 1){
            console.log(x + " lines of code in the file, " + x  + " lines of code; " + name + " strikes one out, clears it all out, " + (x-1) + " lines of code in the file");
            } else {
                console.log(x + " lines of code in the file, " + x  + " lines of code; " + name + " strikes one out, clears it all out, no more lines of code in the file");
            }
        }
    };

