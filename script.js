Document.getElementbyld( "formulario").addeventlistener('submit',function(event){
event.preventDefalt()

//obteras notas inseridas pelo usuario
let nota1 =parseFloat(Document.getElementbyld("nota1").value);
let nota2 =parseFloat(Document.getElementbyld("nota2").value);
let nota3 =parseFloat(Document.getElementbyld("nota3").value);

//calcular a media
let media=(nota1+nota2+nota3)/3;

//exibir a mensagem de resultado
let resultadoDiv=Document.getElementbyld('resultado');
if (media>=6.0){
    resultadoDiv.innerHTML='<p class="aprovado>aprovado!
}
}
