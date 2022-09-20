// JavaScript Document

function e()
{
    var fName = document.querySelector(`#first-name`)
    var lName = document.querySelector(`#last-name`)
    var email = document.querySelector(`#email`)
    var emailCon = document.querySelector(`#emailConfirm`)
    var phone = document.querySelector(`#phone`)
    var inputs = document.querySelectorAll(`input[type="text"]`)
    var tel = document.querySelectorAll(`input[type="tel"]`)
    var emailType = document.querySelectorAll(`input[type="email"]`)
    var p = document.querySelectorAll(`p`)
    var spans =  document.querySelectorAll(`span`)
    //var button = document.querySelector(`input[type="button"]`)
    //var output = document.querySelector(`#output`)
    var bool = true
    
    
    
    for(let i=0; i<inputs.length;i++)
    {
        if(inputs[i].value === ``)
        {
            p[i].style.color= `red`
            spans[i].innerText = `*`
            spans[i].style.display = `inline`
            bool = false
        }
        else if (inputs[2].value !== inputs[3].value)
        {
            p[2].style.color="red"
            spans[2].innerText = `*`
            spans[2].style.display = `inline`

            p[3].style.color= "red"
            spans[3].innerText = `*`
            spans[3].style.display = `inline`
            bool = false
        }
        else
        {
            p[i].style.color = `black`
            spans[i].innerText = ""
            spans[i].style.display = `inline` 
        }

        if (bool == true)
        {
            document.querySelector(`#form`).style.display = `none`
            document.querySelector(`#confirmation`).style.display = `block`
            document.querySelector(`#info`).innerText = `${inputs[0].value} ${inputs[1].value}\n
            ${inputs[2].value}\n
            ${inputs[4].value}`
        }
        
        else
        {
            document.querySelector(`#form`).style.display = `block`
            document.querySelector(`#confirmation`).style.display = `none`
            
        }

        console.log(inputs[0].value)
    }
}
