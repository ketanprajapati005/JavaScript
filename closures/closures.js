function counter(){

    let count = 0;
    
    function enter(){
        count++;
        console.log(count);
    }

    function exit(){
        count--;
        console.log(count);
    }

    let obj = {
        enter: enter,
        exit : exit,
    };

    return obj;
}



function counter(){
    let count = 0;

    return {
        enter : function enter(){
            count++;
            console.log(count);
        },
        exit : function exit(){
            count--;
            console.log(count);
        }
    }
}

let {enter, exit} = counter();

enter();
enter();
exit();
enter();
exit();
enter();
enter();




