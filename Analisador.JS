var numb = document.getElementById('inp1');

var list = document.getElementById('slc1');
var res = document.getElementById('res');
var valores = []

function isNumero(n){
if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
} else {return false}

}
function getMaxOfArray(v) {
    return Math.max.apply(null, valores);
}

function getMinOfArray(v) {
    return Math.min.apply(null, valores);
}

function inlista(n,l) {
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else{ return false}   
};

list.innerHTML = " ";

function adicionar() {
    if (isNumero(numb.value) && !inlista(numb.value, valores)) {
        var item = document.createElement('option');
        item.text = "Valor " + Number(numb.value) + " foi adicionado";
        list.appendChild(item);
        valores.push(Number(numb.value));

        
         
       
        
    } else{
        window.alert("Valor invalido ou já encontrado na sua lista");
    }

   

    numb.value = ""
    numb.focus()
    
}


function finalizar() {

    if(valores.length == 0){
        window.alert("Adicione valores, antes que possa finalizar")
    } else{
        var total = valores.length;
        let sum = 0;

            for (let i = 0; i < valores.length; i++) {
           sum += valores[i];
              }   
         var media = sum / valores.length;                    
        
        res.innerHTML = "";
        res.innerHTML += `<p> O total de itens adicionado a lista foi de  ${total}   Numeros   </p>`
        res.innerHTML += `<p> O maior numero encontrado na lista foi:  ${getMaxOfArray()}</p>`
        res.innerHTML += `<p> O menor numero encontrado na lista foi:  ${getMinOfArray()}</p>`
        res.innerHTML += `<p> A soma de todos os elementos adicionados na lista é de: ${sum}</p>`
        res.innerHTML += `<p> A media de todos os elementos adicionados na lista é de: ${media}</p>`
        
         





    }
     


    
}