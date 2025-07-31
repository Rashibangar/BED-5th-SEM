//how to insert new element in dom?
//1. create a new Element ---> createElement
//2. add required data in that element using innerText or innerHtml
//3. add that element in parent container using appendChild or append
let todo=[{
    id:345345,
    title:"Todo4"
},
{
    id:345345999,
    title:"Todo5"  
},
]
let ul = document.querySelector(".todoList")
function addTodo(todo){
    let li = document.createElement("li");
    li.setAttribute("id",`${todo.id}`)
    li.innerHTML=`  <div>
    <input type="checkbox" name=""id = "checkbox" >    
    <h1>${todo.title} 1</h1>  
   <div>
    <button class = "edit">Edit</button>
    <button class = "delete">Delete</button>
    <p>DOM manipulation refers to the process of using JavaScript to access, change, add, 
        or remove elements and content in an HTML document. The DOM (Document Object Model) 
        represents the structure of a webpage as a tree of objects, allowing developers to        
        dynamically update the page's layout, style, or content without reloading it. 
        Common DOM manipulation tasks include changing text, updating attributes, 
        handling events, and creating or deleting HTML elements. This makes websites interactive 
        and responsive to user actions.</p>
</div>    
 </div>`
 ul.appendChild(li)

}
function showAllTodos(todos){
    todos.array.forEach(todo => {
      addTodo(todo)  
    });
}
//addTodo(todo);
showAllTodos(todos)