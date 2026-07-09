      let player_val , opp_val , winner;
      
      function select_rock(){
        player_val='rock';
      }

      function select_paper(){
        player_val='paper';
      }

      function select_scissors(){
        player_val='scissors';
      }      

      function runGame(){
        generate_opp();
        decide_winner();
        let show=document.querySelectorAll(".move-show");
        show[0].textContent=`${player_val}`;
        show[1].textContent=`${opp_val}`;
        let showWinner=document.querySelector('.js-winner-show');
        showWinner.innerHTML=`${winner}`;
      }

      function generate_opp(){
        let num=Math.random();    
        if(num>0 && num<=1/3){
          opp_val='rock';
        }else if(num>1/3 && num<=2/3){
          opp_val='paper';
        }else{
          opp_val='scissors';
        }
      }
      function decide_winner(){
        if(player_val===opp_val){
          winner='Draw';
        }else{
          if(player_val==='rock'){
            if(opp_val==='paper'){
              winner='Computer';
            }else{
              winner='Player';
            }
          }else if(player_val==='paper'){
            if(opp_val==='scissors'){
              winner='Computer';
            }else{
              winner='Player';
            }
          }else{
            if(opp_val==='rock'){
              winner='Computer';
            }else{
              winner='Player';
            }
          }        
        }
      }

      // let button=document.querySelector('#start-button');
      // button.addEventListener('click',()=>{

      // });

      


      // let button=document.querySelector('#start-button');
      // let text=document.querySelector('#stats');
      // button.addEventListener('click',()=>{
      //   text.textContent=`Player choose:${player_val}
      //   Computer choose:${opp_val}
      //   Winner:${winner}`;
      //   text.style.display='block';
      //   text.style.color='red';
      // });      

      // let content=document.querySelector('#content');
      // let rockButton=document.querySelector('#rb');
      // rockButton.addEventListener("click",()=>{
      //   content.style.display='block';
      // });
