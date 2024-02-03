const header = document.getElementById("Header")
const lambda = document.getElementById("lambdaBtn")
const firstPara = document.getElementById("firstPara")
const isInstanceBtn = document.getElementById("isInstanceBtn")
const isInstancePara = document.getElementById("isInstancePara")
const isCallableBtn = document.getElementById("isCallableBtn")
const isCallablePara = document.getElementById("isCallablePara")

header.textContent = "Python Study"
lambda.onclick = function lambda(){
    firstPara.textContent = `lambda function is used to write a single line of code instead of writing a whole function. lambda functions can be used to replace simple functions.Example: sq = lambda a:a*2, so sq(2) will return 4.`
}
isInstanceBtn.onclick = function isInstance(){
    isInstancePara.textContent = `isinstance() is used to check if the value provided as first para is an instance of second parameter and returns a boolean value if true else false. Example you have a class of Fruit with apple, so isinstance(apple, Fruit) would be true.`
}
isCallableBtn.onclick = function isCallable(){
    isCallablePara.textContent = "iscallable() is used to check if a function or object is callable or not, if its not callable , it would return false. Example a = string called 'vignesh' and you have a function called getName(), then callable(getName) would return true but callable(a) would return false."
}

