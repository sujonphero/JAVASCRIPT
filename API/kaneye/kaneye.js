const loadKaneye = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayKQuote(data));
}
const displayKQuote = quote => {
    const div = document.getElementById('diver');
    const paragh = document.createElement('p')
    div.innerHTML = quote.quote;
}