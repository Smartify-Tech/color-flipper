let colorCodes = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'A', 'B', 'C', 'D', 'E', 'F'
];

let btn = document.getElementById('btn'),
    color = document.getElementById('color');

//add event listener
btn.addEventListener('click', function ()
{
    let code = '#';

    for (count = 1; count <= 6; count++)
    {
        code += colorCodes[getRandomNum()];
    }

    colorCodes[getRandomNum()];

    document.body.style.backgroundColor = code;
    color.style.color = code;

    color.innerHTML = code;


    console.log(code);

})

function getRandomNum()
{
    return Math.floor(colorCodes.length * Math.random())
}