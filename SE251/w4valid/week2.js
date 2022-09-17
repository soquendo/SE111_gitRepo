// JavaScript Document


var fName = document.querySelector(`#first-name`)
var lName = document.querySelector(`#last-name`)
var email = document.querySelector(`#email`)
var emailConfirm = document.querySelector(`#emailConfirm`)
var phone = document.querySelector(`#phone`)

function e()
{
    var bool = true
    var button = document.querySelector(`input[type="button"]`)
    var output = document.querySelector(`#output`)
    var inputs = document.querySelectorAll(`input[type="text"]`)
    var spans =  document.querySelectorAll(`span`)
    var p = document.querySelectorAll(`p`)
    

    
    for(let i=0; i<inputs.length;i++)
    {
        if(inputs[i].value === ``)
        {
            p[i].style.color= `red`
            spans[i].innerText = (`*`)
            spans[i].style.display = `inline`
            bool = false
        }
        else
        {
            p[i].style.color=`black`
            spans[i].innerText = (``)
            spans[i].style.display = `none`
        }

    }

    if (emailConfirm.value === email.value && emailConfirm.value !== ``)
    {
        p[3].style.color = `black`
        spans[3].innerText = (``)
        spans[3].style.display = `none`
    }
    else
    {
        p[3].style.color = `red`
        spans[3].innerText = (`*`)
        spans[3].style.display = `incline`
        bool = false
    }

    document.querySelector(`#info`).innerText = `${inputs[0].value}${inputs[1].value}\n${inputs[2].value}\n${inputs[4].value}`
 
 
    if (bool = true)
    {
        document.querySelector(`#confirmation`).style.display = `black`
        document.querySelector(`#form`).style.display = `none`
    }


}
