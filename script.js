document.getElementbyld( "formulario").addeventlistener('submit',function(event){
event.preventDefalt()

//obteras notas inseridas pelo usuario
let nota1 =parseFloat(document.getElementbyld("nota1").value);
let nota2 =parseFloat(document.getElementbyld("nota2").value);
let nota3 =parseFloat(document.getElementbyld("nota3").value);

//calcular a media
let media=(nota1+nota2+nota3)/3;

//exibir a mensagem de resultado
let resultadoDiv=document.getElementbyld('resultado');
if (media>=6.0){
    resultadoDiv.innerHTML='<p class="aprovado>aprovado!.sua media foi ${media.toFixed(2)}</p>';
}else{
    resultadoDiv.innerHTML='<p class="recuperacao">Recuperacao.Sua media foi:${media.toFixed(2)}</p>';
}
});
