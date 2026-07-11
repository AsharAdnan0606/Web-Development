let grid=['','','','','','','','',''];
//console.log(grid);
let totalmoves=0 , firstdisplay=true , winner='' , lastmove=0;

function makemove(index){
  if(grid[index]===''){
    grid[index]='X';
    totalmoves++;
    lastmove=0;
    if(checkwinner()){
      gameover();         
      return;         
    }
    computermove();
    lastmove=1;
    if(checkwinner()){
      gameover();
      return;
    }
    displayGrid();
  
    console.log(grid);
  }
};

function checkwinner(){
  if((grid[0]===grid[1]&& grid[1]===grid[2] && grid[1]!='') || (grid[3]===grid[4]&& grid[4]===grid[5] && grid[3]!='') || (grid[6]===grid[7]&& grid[7]===grid[8] && grid[6]!='') || (grid[0]===grid[3]&& grid[3]===grid[6] && grid[6]!='') || (grid[1]===grid[4]&& grid[4]===grid[7] && grid[1]!='') || (grid[2]===grid[5]&& grid[5]===grid[8] && grid[2]!='') || (grid[0]===grid[4]&& grid[4]===grid[8] && grid[8]!='') || (grid[2]===grid[4]&& grid[4]===grid[6]&& grid[6]!='')){
    if(lastmove===0){
      winner='Player';
    }else{
      winner='Computer';
    }    
  }
  console.log(winner);
  return winner;
}

function gameover(){  
  displayGrid();
  let buttons=document.querySelectorAll('.general-cell');
  buttons.forEach((button)=>{
    button.removeAttribute('onclick');
  });

  console.log(document.body);
  
}

function computermove(){
  for(let i=0 ; i<grid.length ; i++){
    let cell=grid[i];
    if(cell!='X' && cell!='O'){
      totalmoves++;
      grid[i]='O';
      break;
    }
  }
}


let start=document.querySelector('.start-button');
start.addEventListener('click' ,()=>{
  displayGrid();
})

function displayGrid(){
    document.body.innerHTML=`
    <h1>
      Tic Tac Toe
    </h1>
    <div class="tic-tac-toe-grid">
      <div class="general-cell cell1" onclick="makemove(0)">${grid[0]}</div>
      <div class="general-cell cell2" onclick="makemove(1)">${grid[1]}</div>
      <div class="general-cell cell3" onclick="makemove(2)">${grid[2]}</div>
      <div class="general-cell cell4" onclick="makemove(3)">${grid[3]}</div>
      <div class="general-cell cell5" onclick="makemove(4)">${grid[4]}</div>
      <div class="general-cell cell6" onclick="makemove(5)">${grid[5]}</div>
      <div class="general-cell cell7" onclick="makemove(6)">${grid[6]}</div>
      <div class="general-cell cell8" onclick="makemove(7)">${grid[7]}</div>
      <div class="general-cell cell9" onclick="makemove(8)">${grid[8]}</div>
      <div class="winner">winner: ${winner} </div>            
    </div>
  `;
  
}





