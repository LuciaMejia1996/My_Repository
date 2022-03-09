Algoritmo sin_titulo
	Definir clave Como Caracter
	Definir IsCorrect como Caracter
	Definir intentos como Entero
	Definir  pass Como Caracter
	
	Clave <- "eureka"
	
	Repetir
		Imprimir Sin Saltar "Ingrese su clave"; leer pass
		
		Si pass == clave Entonces
			Imprimir "Clave correcta"
			IsCorrect <- "True"
		SiNo
			intentos <- intentos + 1 
			Imprimir "Clave incorrecta, intento ",intentos
				Si intentos >= 3 Entonces
					Imprimir "Limite de intentos superados"
					IsCorrect <- "True"
				SiNo
					IsCorrect <- "False"
				Fin Si
		Fin Si
	Hasta Que IsCorrect == "True"
		
FinAlgoritmo
