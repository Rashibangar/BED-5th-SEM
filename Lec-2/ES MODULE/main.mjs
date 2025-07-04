import file from "./index.mjs"; //only default one will be imported
import {add,sub} from "./index.mjs" // named export rest one will be imported with this
console.log(file);
console.log(add,sub);