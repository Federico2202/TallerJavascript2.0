var nombres=document.getElementById('nombres');
var apellidos=document.getElementById('apellidos');
var boton=document.getElementById('boton');
var tabla=document.getElementById('tabla');

    boton.addEventListener('click',function(){
        if(generos.selectedIndex!==0){
            if(radio1.checked===true || radio2.checked===true){
                var tr;
                var td1, td2, td3, td4;
                tr=document.createElement('tr');
                td1=document.createElement('td');
                td2=document.createElement('td');
                td3=document.createElement('td');
                td4=document.createElement('td');
                td1.appendChild(document.createTextNode(nombres.value));
                td2.appendChild(document.createTextNode(apellidos.value));
                if(generos!==0){
                    td3.appendChild(document.createTextNode(generos.options[generos.selectedIndex].text));
                }
                if(radio1.checked==true){
                    td4.appendChild(document.createTextNode('casado'));
                }if(radio2.checked==true){
                    td4.appendChild(document.createTextNode('soltero'));
                }
                tr.append(td1,td2,td3,td4);
                tabla.appendChild(tr);
            }
        }else{
            alert("Error");
        }
    })
var generos=document.getElementById('generos');
var radio1=document.getElementById('radio1');
var radio2=document.getElementById('radio2');
radio1.addEventListener('click',function(){
    radio1.checked=true;
    radio2.checked=false;
});
radio2.addEventListener('click',function(){
    radio2.checked=true;
    radio1.checked=false;
});