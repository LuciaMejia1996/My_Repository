Algoritmo sin_titulo
	Definir NombreMes Como Caracter
	Dimension NombreMes[12]
	NombreMes[1] <- 'Enero'
	NombreMes[2] <- 'ebero'
	NombreMes[3] <- 'Marzo'
	NombreMes[4] <- 'Abril'
	NombreMes[5] <- 'Mayo'
	NombreMes[6] <- 'Junio'
	NombreMes[7] <- 'Julio'
	NombreMes[8] <- 'Agosto'
	NombreMes[9] <- 'Septiembre'
	NombreMes[10] <- 'Octubre'
	NombreMes[11] <- 'Noviembre'
	NombreMes[12] <- 'Diciembre'
	Definir i Como Entero
	Definir dia Como Entero
	Definir mes Como Entero
	Definir ano Como Entero
	Escribir 'Ingrese un dia del mes' Sin Saltar
	Leer dia
	Escribir 'Ingrese un mes del año' Sin Saltar
	Leer mes
	Escribir 'Ingrese un año' Sin Saltar
	Leer ano
	Si dia>0 Y dia<=31 Entonces
		Si mes>=1 Y mes<=12 Entonces
			Si ano>=0 Y ano<=2031 Entonces
				Escribir 'Esta fecha es valida'
				Para i<-1 Hasta 12 Hacer
					Si mes==i Entonces
						Escribir 'El mes es: ',NombreMes[i]
					FinSi
				FinPara
			SiNo
				Escribir 'El año no es correcto' Sin Saltar
			FinSi
		SiNo
			Escribir 'El mes no es correcto' Sin Saltar
		FinSi
	SiNo
		Escribir 'El dia no es correcto' Sin Saltar
	FinSi
FinAlgoritmo
