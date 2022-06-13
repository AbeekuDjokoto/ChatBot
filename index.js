
let click = document.getElementById('img')
let text = document.getElementById('text')
let textArea = document.getElementById('textarea')
let textBox = document.getElementById('textbox')
let botReply = document.getElementById("botreply")
let test = document.getElementsByTagName('test')
let message = document.getElementsByTagName('message')



click.addEventListener('click', function(e){
    e.preventDefault()
    let newMessage = document.createElement('p');
    newMessage.style.padding = "10px 20px"
    newMessage.style.background = "#293B79"
    newMessage.style.color = "#FFF"
    newMessage.style.borderRadius = "4px"
    newMessage.style.margin = "10px 24px 5px 1000px"
    newMessage.style.float = "right"
    newMessage.innerHTML = text.value
    textArea.appendChild(newMessage);
    // text.value = "";

    if(text.value.trim().toLowerCase().includes("good morning")){
            let botMessage = document.createElement('h4')
            botMessage.setAttribute("class", "para")
            botMessage.innerHTML = "Hello, valued customer, How may I assist you"
            textArea.appendChild(botMessage)
            console.log(text.value)
    }
    if(text.value.trim().toLowerCase().includes('how are you')){
            let botMessage = document.createElement('h4')
            botMessage.setAttribute("class", "para")
            botMessage.innerHTML = "I am good and yourself?"
            textArea.appendChild(botMessage)
            console.log("Empty")
    }
    

})




// function getValue(){
//     // console.log(text.value)
//     if(text.value === ""){
//             let botMessage = document.createElement('h4')
//             botMessage.setAttribute("class", "para")
//             botMessage.innerHTML = "Hello Sexy"
//             textArea.appendChild(botMessage)
//             console.log("Empty")
//         }else{
//             if(text.value.length > 0){
//                 let botMessage = document.createElement('h4')
//                 botMessage.setAttribute("class", "para")
//                 // botMessage.style.display = "table"
//                 botMessage.innerHTML = "This has some input"
//                 // textArea.insertAdjacentElement("afterend", botMessage)
//                 textArea.appendChild(botMessage)
//                 console.log("This has no input")
//             }
//         }
// }


// getValue()


