var api = {};

var frases = [
	{_id: 0, texto:'Ciência da computação é tão sobre computadores quanto astronomia é sobre telescópios.', tempo: 15 },
	{_id: 1, texto:'Debuggers não consertam erros, apenas os exibem em slow motion.',tempo: 8 },
	{_id: 2, texto:'"Bring me Thanos." Thor 2018', tempo: 7 },
	{_id: 3, texto:'Existem duas tarefas difíceis na Ciência da Computação: invalidação de cache e nomear as coisas.', tempo: 15 },
	{_id: 4, texto:'Vasco da Gama, o melhor time do Planeta.', tempo: 6 },
	{_id: 5, texto:'No meu PC funciona.', tempo: 4 },
	{_id: 6, texto:'Hardware é o que você chuta, software é o que você xinga.', tempo: 12 },
	{_id: 7, texto:'Software em funcionamento mais que documentação abrangente.', tempo: 10 },
	{_id: 8, texto:'Iterar é humano, recursão é divino.', tempo: 7},
	{_id: 9, texto:'Existem três jeitos de desenvolver software. O jeito certo, o jeito errado e o meu jeito, que é igual o jeito errado só que mais rápido.', tempo: 20},

	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;
