const bodyElement = document.body

const div =document.createElement("div");

bodyElement.appendChild(div)
div.style.backgroundImage = "url('https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg?w=1380&t=st=1705589139~exp=1705589739~hmac=bf9e192e8095ceb6b0a426d7b81a0d08eae620dade1c54099a7304bc0510370a')";
div.style.backgroundSize = 'cover';
div.style.backgroundPosition = 'center';
div.style.height="800px"
div.style.width="40%"
div.style.marginLeft="30%"




const heading = document.createElement("h1")

heading.innerText = "Todolist"

div.appendChild(heading)
heading.style.textAlign="center"

const passege = document.createElement("p")

passege.innerText = "Each day I will accomplish one thing on my todo list."

div.appendChild(passege)

const head = document.createElement("h3")

head.innerText = "Read a Book"

div.appendChild(head)

const pass = document.createElement("p")

pass.innerText = "I dont think that the human race will survive the next thousand year, unless we spread into space. There are too many sccidents that can befall life on a single planet. But i'm an optimist..."

div.appendChild(pass)

const btn = document.createElement("button")

btn.innerText = "Start"

div.appendChild(btn)

btn.style.height="5%"
btn.style.width="10%"
btn.style.alignItems="center"

const ancr = document.createElement("a")

ancr.innerText = "Don't skip introduction"

div.appendChild(ancr)


console.log(bodyElement);

