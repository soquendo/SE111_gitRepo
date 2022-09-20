// JavaScript Document

// Create our function
var fName = document.querySelector(`#first-name`)
var lName = document.querySelector(`#last-name`)
var email = document.querySelector(`#email`)
var emailCon = document.querySelector(`#emailCon`)
var phone = document.querySelector(`#phone`)

function e()
{
    var bool = true

    var inputs = document.querySelectorAll(`input[type="text"]`)
    var p = document.querySelectorAll(`p`)
    //console.log(inputs)
    var spans = document.querySelectorAll(`span`)
    for(i=0; i<inputs.length;i++)
        {
            if(inputs[i].value === ``)
            {
                p[i].style.color = `red`
                spans[i].innerText = (`*`)
                spans[i].style.display = "inline"
                bool = false
            }
            else
            {
                p[i].style.color = `black`
                spans[i].innerText = (``)
                spans[i].style.display = "none"

            }
    }

    if (emailCon.value === email.value && emailCon.value !== ``)
    {
        
        p[3].style.color = `black`
        spans[3].innerText = (``)
        spans[3].style.display = "none"

        
    }
    else
    {

        p[3].style.color = `red`
        spans[3].innerText = (`*`)
        spans[3].style.display = "inline"
        bool = false


    }
    
   

    document.querySelector(`#info`).innerText = `${inputs[0].value}${inputs[1].value}\n${inputs[2].value}\n${inputs[4].value}` 
       

    if (bool = true )
    {
        document.querySelector(`#confirmation`).style.display = `block` 
        document.querySelector(`#form`).style.display =  `none`
    }
        
    
}




// Creating Email Confirmation


