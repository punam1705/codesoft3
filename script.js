const userinput = document.getElementById("userinput");
var expression = '';
function press(num){
    expression += num;
    userinput.value = expression;

}
function equal(){
    userinput.value = eval(expression);
    expression = '';
}
function sin(){
    userinput.value = Math.sin(expression);
    expression ='';
}
function cos(){
    userinput.value = Math.cos(expression);
    expression ='';
}
function tan(){
    userinput.value = Math.tan(expression);
    expression ='';
}
function log(){
    userinput.value = Math.log(expression);
    expression ='';
}
function pow(){
    userinput.value = Math.pow(expression,2);
    expression ='';
}
function backspc(){
    userinput.value = userinput.value.substr(0,userinput.value.length-1);
    expression ='';
}