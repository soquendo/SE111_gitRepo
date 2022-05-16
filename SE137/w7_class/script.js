var tray = document.querySelector(`#tray`);

tray.addEventListener(`click`, openClose)

function openClose(e)
{
    var nav = document.querySelector(`nav`);
    nav.classList.toggle(`hidden`);
}

var tabs = document.querySelectorAll(`#tabs a`);
console.log(tabs);

for(let i=0; i<tabs.length; i++)
{
    tabs[i].addEventListener(`click`, function(e){
        for(let i=0; i<tabs.length; i++)
        {
            tabs[i].style.backgroundColor=`orange`;
        }
        e.target.style.backgroundColor=`rgb(101, 105, 97)`;
        document.querySelectorAll(`#breadcrumbs a`)[3].innerHTML = `Tabs ${i+1}`
    });
}


