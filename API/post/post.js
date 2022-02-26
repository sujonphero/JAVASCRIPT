function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
loadPost();

function displayPost(posts){
    for(const post of posts){
    const section = document.getElementById('sect');
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        sect.appendChild(div);
    }

}