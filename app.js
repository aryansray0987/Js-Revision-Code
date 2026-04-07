


//for each loop me item , index , array 
//functional chaining..

function print(){
    console.log(this)
    function anotherPrint(){
        console.log(this)
    }
    anotherPrint()
}
print()