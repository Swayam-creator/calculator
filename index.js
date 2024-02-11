let input=document.getElementById('display');
let button=document.querySelectorAll('button');
let result='';
button.forEach(element=>{
    element.addEventListener('click',(b)=>{
        if(b.target.innerText=='='){
            result=String(eval(result));
            input.value=result;
        }
        else if(b.target.innerText==='DEL'){
          result=result.slice(0,-1); // or we can also use substring method that is result.substring(0,result.length-1);
          input.value=result;
        }
        else if(b.target.innerText==='C'){
          result=''
          input.value=result;
        }
        else{
            result+=b.target.innerText;
            input.value=result;
        }
    })
})