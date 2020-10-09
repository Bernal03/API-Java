function Leer() {
    const city = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='a22ec2cfc3b00b363310c083f7bc4c0b';
    
    buscar2(city,key);
}

const buscar2=async(city,key)=>{

    const api_url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    const respuesta= await fetch(api_url);
    const data=await respuesta.json();
    const Search = await data.main;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML='';
        document.getElementById("lista").innerHTML+=`
        <div class="container">
            <div class="row">
                <div class="col-md">
                    <img src="yakko.png" width="300" height="300">
                </div>

                <div class="col-md">
                    <h1>Nombre: ${data.name}</h1>
                    <h2>Temperatura actual: ${Search.temp}°</h2>
                    <h3>Maxima: ${Search.temp_max}°</h3>
                    <h3>Minima: ${Search.temp_min}°</h3>
                </div>
            </div>
        </div>`;
        }

    }