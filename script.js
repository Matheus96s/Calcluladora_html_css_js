// alert('Connected')
function insert(num){
    document.form.textview.value=document.form.textview.value+num;
  }
  
  function equals(){
    var txt=document.form.textview.value;
    if(txt)
    document.form.textview.value=eval(txt);
    else
      document.form.textview.value='TÁ ERRADO MANO!!!'
      
  }

  function r42(){
    var txt=document.form.textview.value;
    if(txt)
    document.form.textview.value=eval(txt);
    else
      document.form.textview.value=' A RESPOSTA É O Nº 42'
      
  }

  
  function clean(){
    document.form.textview.value="";
  }
  
  function back(){
    var txt=document.form.textview.value;
    document.form.textview.value=txt.substring(0,txt.length-1);
  }