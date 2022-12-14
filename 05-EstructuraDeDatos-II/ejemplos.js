function Node(data) {
	this.data = data;
	this.next = null;
}

function List() {
	this.head = null;
	//this._length = 0; ---> podria no estar no indispensable
}

List.prototype.add = function (data) {
	var node = new Node(data);
	var current = this.head; // this hace referencia a quien lo llama

	//* Si esta vacia:
	// (!current) es igual a (current === null)
	if (!current) {
		// puede o no tener informacion en el head
		// aca estoy en el caso de que no tengo un nodo asociado al head
		// por lo tsnto list: -> null
		this.head = node;
		//this._length++; // sumar 1 mas ---> podria no estar
		return node;
	}

	//* Si no esta vacia, recorro hasta encontrar el ultimo:
	// while(current.next !== null)
	while (current.next) {
		current = current.next;
	}

	// al salir del while se ejecuta esto
	//* Despues del while el current.next ya no debe apuntar a null sino al nuevo node:
	current.next = node;
	//this._length++; ---> podria no estar
	return node;
};

var listita = new List();
console.log(listita);

listita.add(5);
listita.add('PEPE');
listita.add(true);
listita.add(['asd', (asd) => console.log(asd)]);

console.log(listita);

// Así se ve la funcion add :
//* https://excalidraw.com/#json=HR2Xwni5SWIKMdrBRvb8U,UNDXf5XVSmgFJzslzg8c-A

List.prototype.getAll = function () {
	current = this.head; //empezamos en la cabeza

	if (!current) {
		console.log('La lista esta vacia!');
		return;
	}

	while (current) {
		console.log(current.data);
		current = current.next;
	}

	return;
};

List.getAll();
