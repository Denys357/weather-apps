let select 	= document.getElementById("city");
let weather = document.createElement('div');

select.addEventListener("change", fetchGet);




 	async function fetchGet() {
 		clear();
 		let options 	= select.selectedIndex;
  		let cityName 	= select[options].value;
 		let fetchData 	= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2e568ead22ae89a9ff80b47eccb4e6cb`);
 		let jsonData 	= await fetchData.json();
  		let temp 		= Math.round(jsonData.main.temp - 273.15);
 		let feelsLike 	= Math.round(jsonData.main.feels_like - 273.15);
 		let windSpeed 	= Math.round(jsonData.wind.speed * 1.609);
 		weather.innerHTML = `Температура: ${temp};
 		<br>
 		Чувствуется как: ${feelsLike};
 		<br>
 		Влажность: ${jsonData.main.humidity}%;
 		<br>
 		Скорость ветра: ${windSpeed} км/час;`;
 		document.body.append(weather);
 	}

function clear() {
	weather.innerHTML = "";
 	}
