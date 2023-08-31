export function generatefooter(){
    const content = document.querySelector('.content');
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = "footers";
    content.appendChild(footer);
}