let a=0,operation,b=0,operAvail=0,move=-1;            
      let out=document.querySelector('.outputScreen');      
      

      //this choose operation func helps solving the chain operator problems
      function chooseOperation(inp){

        if(operAvail>0){
          calculate();
        }
        operAvail++;
        operation=inp;
        move=0;
      }

      function reset(){            
        a=0;b=0;
        out.value='';        
      }

      function calculate(){
        
        a=Number(a);
        b=Number(b);
        if(operation==='+'){
          a=a+b;
        }else if(operation==='-'){
          a=a-b;
        }else if(operation==='*'){
          a=a*b;
        }else{
          a=a/b;
        }   

        console.log(a);                    
        out.value=a;
        b=0;
        operAvail=0;
      }
      
      function cancelInput(){
        let str=out.value;
        out.value=str.slice(0,-1);
        if(move===1){
          if(b){
            b=0;
          }else{
            a=0;
          }
          
        }
      }
    
      function displayOutput(inp){     
        if((a===0 && operAvail) || (b===0 && operAvail>1)){
          if(b===0 && operAvail>1){
            operAvail=1;
          }else{
            operAvail=0;
          }
          
          return;
        }
        if(out.value===''){
          out.value=inp;
        }else{
          out.value+=inp;
        }

        if(inp>=0 && inp<=9){  
          move=1;        
          if(!operAvail){
            a+=inp;
            console.log(`a=${a}`);
          }else{
            b+=inp;                         
            console.log(`b=${b}`);            
          }        
        }        
      }      