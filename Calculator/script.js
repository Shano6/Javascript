const calculator = document.getElementsByClassName('calculator')[0]
const input = document.getElementById('calculation')
  
let calculation=''

let display =()=>{
    document.getElementById('calculation').value=calculation
}

input.addEventListener('keydown', function(e) {
    const regex = /[\*\+\x2D-9\^\u221A]/
    if (!regex.test(e.key) && e.key != 'Backspace' && e.key != 'ArrowLeft' && e.key != 'ArrowRight') {
        e.preventDefault();
    }
});

calculator.addEventListener('click', (event)=>{
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }

    if(calculation=='Wrong Expression'){
        calculation=''
        display()
    }

    switch(event.target.className){
        case 'AC': calculation='';  display(); break;
        case 'result': calculate(); break;
        case 'del': del();  display(); break;
        default: calculation+=event.target.className; display();   
    }
})

input.addEventListener('change', (event) => {
    calculation=event.target.value;
    display();
  });

let del=()=>{
    calculation = calculation.slice(0, -1)
}

let calculate =()=>{
    let arr = calculation.split(/([\*\+\x2D\/\^\u221A])/);
    let arr2=[]

    arr=arr.filter((e)=>e!=='')
    

    if(!isNaN(arr[0])){
        arr.unshift('+')
    }

    for(let i=0; i<arr.length;i++){
        let currentValue=parseFloat(arr[i])
        if(isNaN(currentValue)){
            let operator=arr[i];
            if(operator=='*'||operator=='/'||operator=='^'||operator=='√'){
                arr2=[...arr2,operator]
                if(!isNaN(parseFloat(arr[i+1]))){
                    arr2=[...arr2,parseFloat(arr[i+1])]
                    i++
                }
            }else{
                while(arr[i+1]=='-'||arr[i+1]=='+'){
                    operator = chooseOperator(operator, arr[i+1]);
                    i++
                    if(operator=='err'){
                        error()
                    }
                }
            arr2=[...arr2, parseFloat(operator+arr[i+1])]
            }
        }
    }

    arr2 = prio(arr2)
    let result = sum(arr2)

    
    if(String(result).includes('.')){
        console.log(result)
        calculation = String(Math.round(result * 10**(10-String(Math.round(result)).length))/10**(10-String(Math.round(result)).length))
        calculation = calculation.slice(0, 11)
    } else{
        calculation = String(result).slice(0, 10)
    }
    
    
    if(isNaN(result)||!isFinite(result)){
        error()
    }else{
        display()
    }    
}

let chooseOperator=(operator1, operator2)=>{
    switch(operator1 + "|" + operator2) {
        case "+|-": return '-'; break;
        case "-|+": return '-'; break;
        case "-|-": return '+'; break;
        case "+|+": return '+'; break;
        default: return 'err';
    }
}

let prio =(arr)=>{
    while(arr.includes('√')){
        let index = arr.indexOf('√')
        arr.splice(index-1, 2, Math.sqrt(arr[index-1]))
}
    while(arr.includes('^')){
        let index = arr.indexOf('^')
        arr.splice(index-1, 3, arr[index-1]**arr[index+1])
    }

    while(arr.includes('*')){
        let index = arr.indexOf('*')
        arr.splice(index-1, 3, (arr[index-1]*(arr[index+1])))
}
    while(arr.includes('/')){
        let index = arr.indexOf('/')
        arr.splice(index-1, 3,arr[index-1]/arr[index+1])
}
    return arr
}

let sum =(arr)=>{
    let sum=0;
    arr.forEach((e)=>sum+=e)
    return sum
}

let error =()=>{
    calculation = "Wrong Expression"
    display()
}