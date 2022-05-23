Algoritmo sin_titulo
	Definir  num1 Como enteros
	Definir  num2 Como enteros
	Definir  resultado Como enteros
	
	Imprimir Sin Saltar "Ingrese el primer numero: "; leer num1
	Imprimir  Sin Saltar "Ingrese el segundo numero: "; leer num2
	
	
	Si num1 > num2 Entonces
		resultado <- num1 % num2
		Imprimir Sin Saltar "su division fue: ",resultado
	SiNo
		resultado <- num2 % num1
		Imprimir Sin Saltar "su division fue: ",resultado
	Fin Si
FinAlgoritmo
