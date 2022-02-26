function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => displayUser(data))
}
function displayUser(data){
    for(const user of data){
    const ulList = document.getElementById('ul-list');
    const li = document.createElement('li');
    li.innerText = `Name: ${user.name} Email: ${user.email}`
    ulList.appendChild(li)
    console.log(user);

    }
}
