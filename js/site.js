
window.addEventListener('DOMContentLoaded', () =>
{
    links = document.querySelectorAll('a');
    addBackColorToLink();
})

function addBackColorToLink()
{
    if (window.location.href.includes('hex'))
    {
        links[1].style.backgroundColor = 'aquamarine';

    }
    else
        links[0].style.backgroundColor = 'aquamarine';

}
    