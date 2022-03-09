Algoritmo sin_titulo
	Definir NombreMes Como Caracter
	Dimension NombreMes[12];
	
	NombreMes[1] <- "Enero"
	NombreMes[2] <- "ebero"
	NombreMes[3] <- "Marzo"
	NombreMes[4] <- "Abril"
	NombreMes[5] <- "Mayo"
	NombreMes[6] <- "Junio"
	NombreMes[7] <- "Julio"
	NombreMes[8] <- "Agosto"
	NombreMes[9] <- "Septiembre"
	NombreMes[10] <- "Octubre"
	NombreMes[11] <- "Noviembre"
	NombreMes[12] <- "Diciembre"
	
	
	Definir i Como Entero
	Definir dia como Entero
	Definir mes Como Entero
	Definir ano Como Entero
	
	Imprimir Sin Saltar"Ingrese un dia del mes";leer dia
	Imprimir Sin Saltar"Ingrese un mes del año";leer mes
	Imprimir Sin Saltar"Ingrese un año";leer ano
	
	
	Si dia > 0 y dia <= 31 Entonces
		Si mes >= 1 y mes <= 12 Entonces
			Si ano >= 0 Y ano <= 2031 Entonces
				Imprimir "Esta fecha es valida"
				Para i<-1 Hasta 12 Con Paso 1 Hacer
					Si mes == i  Entonces
						Imprimir "El mes es: ",NombreMes[i]
					SiNo
						
					Fin Si
				FinPara
			SiNo
				Imprimir Sin Saltar "El año no es correcto"
			Fin Si
		SiNo
			Imprimir Sin Saltar "El mes no es correcto"
		Fin Si
	SiNo
		Imprimir Sin Saltar "El dia no es correcto"
	Fin Si
	
	
FinAlgoritmo
