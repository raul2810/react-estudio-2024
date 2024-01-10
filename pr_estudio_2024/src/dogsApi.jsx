import {React ,useEffect, useState } from "react";

export function Request () {
	
	const [peticion,setPeticion] = useState('cargando... ')

    const url = 'https://dog-facts2.p.rapidapi.com/facts';
    const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '385f269aecmshd080ee86b2ba857p17d2c6jsn5da17dd4b90c',
			'X-RapidAPI-Host': 'dog-facts2.p.rapidapi.com'
		}
	};
	useEffect(()=> {
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