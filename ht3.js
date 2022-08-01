//the firs function
function counter(){
    let result = 0;

    function res(num){
        result = num + result;
        console.log(result);
    };

    return res;
}

let a = counter();
a(3);
a(5);
a(228);

//the second function
console.log("the 2d");

function array(){
    let arr = [];

    function add(sth){
        if (sth != null){
            arr.push(sth);
        }
        else{
            arr.length = 0;
        }
        console.log(arr);
    }

    return add;
}


let b = array();
b(3);
b(5);
b();
b("ok");