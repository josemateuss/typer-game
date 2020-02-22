$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
	$.get("http://localhost:3000/frases", trocarFrase);
}

function trocarFrase(data){
	var frase = $(".frase");
	var numeroAleatorio = Math.floor(Math.random() * data.length); //data.length serve para não deixar fixo o nº de frases
	//Math é um Objeto JS que permite que você execute tarefas matemáticas em números.
	//.floor() serve pra arredondar o random para baixo e o .random() para dar um número aleatório entre 0 e 1.
	frase.text(data[numeroAleatorio].texto);
	atualizarTamanhoFrase();
	atualizarTempoInicial(data[numeroAleatorio].tempo);

}