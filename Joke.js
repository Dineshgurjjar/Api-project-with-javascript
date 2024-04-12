const URL = "https://official-joke-api.appspot.com/jokes/random";
// let promise = fetch(URL);
// console.log(promise);


// const getFacts= async ()=>{
//     document.getElementById("fact").classList.remove("fact");
//      document.getElementById("fact").innerHTML="...."
//     let promise =  await fetch(URL);
//     console.log(promise);
//     let data =await promise.json();
    
//     // console.log(data)
//     console.log(data.setup)
//     console.log(data.punchline)
    
//     document.getElementById('fact').innerHTML=`setup:"${data.setup}"|<br> punchline:"${data.punchline}"`
//     document.getElementById("fact").classList.add("fact");


// }
// document.getElementById("btn").addEventListener("click", getFacts)

// getFacts();
function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
}).then((data)=>{
    console.log(data);
    document.getElementById('fact').innerHTML=`setup:"${data.setup}"|<br> punchline:"${data.punchline}"`
   
});
}
document.getElementById("btn").addEventListener("click", getFacts)

