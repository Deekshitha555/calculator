let current_input="";
function append(value){
    current_input+=value;
    document.getElementById('display').value=current_input
 }
function calculate(){
    try{
        current_input=eval(current_input);
        document.getElementById('display').value=current_input;
       }catch{
          document.getElementById('display').value = 'Error';
         }
    }