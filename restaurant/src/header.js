
export function generateHeader()
{
    const content = document.querySelector('.content');
    const headerContent = `
        <div class="header">
            <h1 class="restaurant">Restaurant</h1>
            <div class="nav">
                <button class="btn home">Home</button>
                <button class="btn menu">Menu</button>
                <button class="btn contact">Contact</button>
            </div>
        </div>
    `;
    content.innerHTML = headerContent + content.innerHTML;
}