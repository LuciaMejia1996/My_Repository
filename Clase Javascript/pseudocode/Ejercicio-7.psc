Algoritmo sin_titulo
	Definir num Como Entero
	Definir op Como Entero
	Definir  end Como caracter

	end <- "Falso"
	
	Repetir
		Imprimir Sin Saltar "ingrese un numero ";leer num
		
		Si num == 0 Entonces
			Escribir "El numero no es par ni impar"
		SiNo
			Si num > 0 Entonces
				op <- num MOD 2
				
				Si op <> 0 Entonces
					Imprimir "El numero ",num," es impar"
					end <- "True"
				SiNo
					Imprimir "El numero no es par ni impar"
					end <- "True"
				Fin Si
			SiNo
				Imprimir "debe ingresar un numero mayor que cero"
				end <- "Falso"
			Fin Si
		Fin Si
	Hasta Que end == "True"
	

	
FinAlgoritmo
