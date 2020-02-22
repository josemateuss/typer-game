var campo = $(".campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text();

//$(function()) --> função do jQuery para ler as funções quando a página for carregada
$(function(){
	atualizarTamanhoFrase();
	atualizarContadores();
	inicializarCronometro();
	validarFraseDigitada();
	$("#botao-reiniciar").click(reiniciarJogo); //.click() = on("click", function()) .focus também funciona
});

function atualizarTamanhoFrase(){
	var frase = $(".frase").text(); //$ = função reduzida de jQuery
	var numPalavras = frase.split(/\S+/).length - 1; // regex usado para contabilizar certinho a contagem
	//.split() serve para dividir uma string em varias
	var tamanhoFrase = $("#tamanho-frase");
	tamanhoFrase.text(numPalavras);
}

function atualizarTempoInicial(tempo){
	tempoInicial = tempo;
	$("#tempo-digitacao").text(tempo);

}
 
function atualizarContadores(){
	//on = função no jQuery para executar ações de eventos
	campo.on("input", function(){ //input = evento para quando o usuário entra no campo
		var conteudo = campo.val(); //.val() é para alterar os valores dos campos de input
		//também poderia usar o let ao invés do var
		var qtdPalavras = conteudo.split(/\S+/).length - 1; // \S+ = um ou mais espaços em branco
		$("#contador-palavras").text(qtdPalavras);
		var qtdCaracteres = conteudo.length;
		$("#contador-caracteres").text(qtdCaracteres);
		});
}

function inicializarCronometro(){
	//one = função igual on, mas só executa uma vez
	campo.one("focus", function(){ //focus = evento para identificar se o usuario entrou no campo, funciona com clique ou tab da página
		//setInterval() executa uma função (1º parametro), de tanto em tanto tempo (2º parametro)
		var tempoRestante = $("#tempo-digitacao").text();
		var cronometroId = setInterval(function(){
			tempoRestante--;
			$("#tempo-digitacao").text(tempoRestante);
			if(tempoRestante < 1){
					clearInterval(cronometroId); //clearInterval() = parar o contador do setInterval()
					finalizarJogo();
				}
			},1000); //1000 milissegundos = 1 segundo
		});
}

function finalizarJogo(){
	campo.attr("disabled", true); //.attr() = função que modifica atributo do HTML
	//para os atributos que não tem valor (ex: required, disabled), é necessário passar o true (colocar) ou false (retirar)
	campo.toggleClass("campo-desativado") //toggle é liga desliga, se tem, ele tira, se nao tem, ele coloca
	inserirPlacar();
}

function validarFraseDigitada(){
	campo.on("input", function(){
		var frase = $(".frase").text();
		var digitado = campo.val();
		var comparavel = frase.substr(0, digitado.length); //começa na posição 0 ate ode o caa digitou --> comparar frase
		//.substr() = função do jQuery que retorna cada número de caracteres de cada posição da string
		if(digitado == comparavel){
			campo.addClass("campo-correto");
			campo.removeClass("campo-errado");
		}else{
			campo.addClass("campo-errado");
			campo.removeClass("campo-correto");
		};
	});
}

function reiniciarJogo(){
	campo.attr("disabled", false);
	campo.val("");
	$("#contador-palavras").text("0");
	$("#contador-caracteres").text("0");
	$("#tempo-digitacao").text(tempoInicial);
	inicializarCronometro();
	campo.toggleClass("campo-desativado"); 
	campo.removeClass("campo-correto"); //função do jQuery para remover classe css
	campo.removeClass("campo-errado");
}