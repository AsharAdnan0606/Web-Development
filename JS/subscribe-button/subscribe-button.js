function changeState(){
        button=document.querySelector('.subButton');
        if(button.innerHTML==='Subscribe'){
          button.innerHTML='Subscribed';        
          button.style.color='rgb(231, 220, 220)';
          button.style.backgroundColor='white';
          button.style.border='1px solid rgb(233, 229, 229) ';
        }else{
          button.innerHTML='Subscribe';
          button.style.backgroundColor= 'rgb(241, 3, 3)';
          button.style.color='white';
          button.style.border='0px';
                   
        }
      }