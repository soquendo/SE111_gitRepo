// JavaScript Document


var fName = document.querySelector(`#first-name`)
var lName = document.querySelector(`#last-name`)
var email = document.querySelector(`#email`)
var emailCon = document.querySelector(`#emailConfirm`)
var phone = document.querySelector(`#phone`)
var form = document.querySelector(`#form`)
var conf = document.querySelector(`#confirmation`)
var bool = true

function e()
{
    
    var inputs = document.querySelectorAll(`input[type="text"]`)
    var p = document.querySelectorAll(`p`)

    var button = document.querySelector(`input[type="button"]`)
    var output = document.querySelector(`#output`)
    
    var spans =  document.querySelectorAll(`span`)
    
    
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
            p[2].style.color=`red`
            spans[2].innerText = `*`
            spans[2].style.display = `inline`

            p[3].style.color= `red`
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
            document.querySelector(`#confirmation`).style.display = `none`
            document.querySelector(`#form`).style.display = `block`
        }

        console.log(inputs[0].value)


    }

    

    //document.querySelector(`#info`).innerText = `${inputs[0].value}${inputs[1].value}\n${inputs[2].value}\n${inputs[4].value}`
 
 
    

}
