Algoritmo sin_titulo
	Definir  num1 Como Entero
	Definir  num2 Como Entero
	Definir  num3 Como Entero
	
	Imprimir Sin Saltar "ingrese primer numero: "; leer num1
	Imprimir Sin Saltar "ingrese segundo numero: "; leer num2
	Imprimir Sin Saltar "ingrese tercer numero: "; leer num3
	
	Si num1 > num2 Y num1 > num3 Entonces
		Imprimir sin saltar "El numero mas alto es: ",num1
	SiNo
		Si num2 > num1 Y num2 > num3 Entonces
			Imprimir sin saltar "El numero mas alto es: ",num2
		SiNo
			Imprimir sin saltar "El numero mas alto es: ",num3
		Fin Si
	Fin Si
FinAlgoritmo
