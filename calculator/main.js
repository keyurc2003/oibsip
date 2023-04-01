

function setdata(value)
{
    // document.getElementById("display").innerHTML = ""; 
    let current;
    if(value=="ac")
    {
        document.getElementById("display").innerHTML = ""; 
    }

    else if (value=="=") {

        try{
            let l ;
            l= document.getElementById("display").textContent; 
        
            let ans = eval(l);
            console.log(ans);
            document.getElementById("display").innerHTML = ans; 
        }
      catch{
        alert("Math error")
      }
    }

    else if (value=="c")
    {
        l= document.getElementById("display").textContent;
        l=l.slice (0,-1);
        console.log(l); 
        document.getElementById("display").innerHTML = l; 

    }

    else{

        document.getElementById("display").innerHTML += value;
        current=value
    }

    
}