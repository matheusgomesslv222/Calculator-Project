

function insert(num){
    
  var number = document.getElementById('resultado').value;

  document.getElementById('resultado').value = number + num;

  console.log(num);
};

function cleanResultado(){
  var clear =  document.getElementById('resultado').value = '';
};

function calcular(){
    var resultado = document.getElementById('resultado').value;

    if(resultado){
        document.getElementById('resultado').value = eval(resultado)
    }else{
        document.getElementById('resultado').value = 'Sem resultado'
    }

};

