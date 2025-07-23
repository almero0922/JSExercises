function loopingTriangle(loop) {
    let triangle = "";
    for (let i = 0; i < loop; i++) {
        console.log(triangle += "#")
    }
}

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

}

function chessboard(num) {
    let board = '';
    for (let i = 0; i < num; i++) {
        for (let i2 = 0; i2 < num; i2++) {
            if (i % 2 == 0) {
                i2 % 2 == 0 ? board += '#' : board += ' ';
            } else {
                i2 % 2 == 0 ? board += ' ' : board += '#';
            }

        }
        board += "\n"
    }
    console.log(board);
}

function validate(message) {
    //your code here
    let array = message.split(" ");
    const reg = /[0-9]{2}/;
    const reg3 = /[0-9]{3}/;
    const regStr = /^[A-Z]+$/;
    if (array.length == 8) {
        array.forEach((el, index) => {
            console.log(index)
            if (index == 0) {
                if (el != "MDZHB") {
                    console.log(index + " " + el);
                    return false;

                }
            }
            else if (index == 1) {
                if (!reg.test(el)) {
                    console.log(index + " " + el);
                    return false;
                }
            }
            else if (index == 2) {
                if (!reg3.test(el)) {
                    console.log(index + " " + el);
                    return false;

                }
            }
            else if (index == 3) {
                if (!regStr.test(el)) {
                    console.log(index + " " + el);
                    return false;

                }
            }
            else if (index >= 4) {
                if (!reg.test(el)) {
                    console.log(index + " " + el);
                    return false;
                }
            }
        })
        return true;
    }
    return false;
}

function min(a,b){
    if(a == 0){
        return 'parm1';
    }else if(b == 0){
        return 'parm2';
    }else{
        return min(a -1, b-1);
    }
}

function countBs(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "B"){
            count++;
        }
    }
    return count;
}