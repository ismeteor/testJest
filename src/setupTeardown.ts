let citys = []
let foods = {}
export function initializeCityDatabase(){
    citys = ["wuhan","chengdong","beijing", "Vienna", "San Juan"];
}

export function isCity(aimsCity){
    return citys.find((city)=>{
        return aimsCity == city
    }) || false;
}

export function clearCityDatabase(){
    citys = []
}

export function isValidCityFoodPair(city){
    return true;
}

export function initializeFoodDatabase(){

}

