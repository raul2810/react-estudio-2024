import {React ,useEffect, useState } from "react";
export function Request() {

	const [peticion, setPeticion] = useState('cargando... ')
	const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

	const url = 'https://dog-facts2.p.rapidapi.com/facts'
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': apiKey,
			'X-RapidAPI-Host': 'dog-facts2.p.rapidapi.com'
		}
	}

	useEffect(() => {
		async function fetchData() {
			const peticion = await fetch(url, options)
			console.log(peticion)
			const resultado = await peticion.json()
			console.log(resultado)
			setPeticion(resultado.facts)
		}
		fetchData();
	}, [])

	return (
		<p>{peticion}</p>
	)

}