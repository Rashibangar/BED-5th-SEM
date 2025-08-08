// function getCommentData(){
//     axios.get("https://jsonplaceholder.typicode.com/comments")
//     .then((res)=>{
//         console.log(res.data)
//     })
// }
// getCommentData();
// async function getCommentData() {
//     try {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
//         console.log(res.data);
//     } catch (err) {
//         console.error(err.message);
//     }
// }
// getCommentData();

function adduser(email,password){
    axios.post('http://localhost:1427/user',{
    email: email,
    password: password
})
.then((res)=>{
    console.log(res.data)
})
.catch((err)=>{
    console.log(err.message)
})
}
adduser("rashi1427.be23@chitkara.edu.in","12345");