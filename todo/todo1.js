
function addMore() {
    document.getElementById('error').innerHTML = "";

    let name = document.getElementById('name').value;
    if (name == '') {
        document.getElementById('error').innerHTML = "please enter value";
    } else {
        let box = document.getElementById('box');

        let li = document.createElement('li');
        

        let a = document.createElement('a');
        a.textContent = 'X';
        // a.href = "del()";
        a.href = "javascript:void(0)";
        a.className = "remove";
        a.onclick="del1()";
        li.textContent = name;
        li.appendChild(a);

        let pos = box.firstElementChild;

        if (pos == null) {
            box.appendChild(li);
        } else {
            box.insertBefore(li, pos);
        }
    }
    document.getElementById('name').value="";
    
let btn = 0;
btn =document.querySelector('ul');    
//   btn=document.getElementById('box'); 
console.log(btn);
btn.addEventListener('click',function (e) {
  let box=document.getElementById('box');
  let li=e.target.parentNode;
  box.removeChild(li);

});

}

