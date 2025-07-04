export function add(a,b){ // named export
    return a+b;
}
export function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
export function divide(a,b){
    return a/b;
}
export default mul; //default export  only one in a file can be exported