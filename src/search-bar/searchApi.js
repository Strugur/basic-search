import dataSetJson from "../dataset.json"

export function searchAsync(value){
    console.log("search async");
    return new Promise((resolve, reject) => {
        let matchCounter = 0;
        const searchResult = dataSetJson.filter( (v, i) => {
            let match =  v.toLowerCase().includes(value.toLowerCase());

            if(matchCounter > 10){
            return false;
            }
            if(match){
            matchCounter++;
            return true;
            }else{
            return false;
            }
            
        });

        resolve(searchResult);
    } );
}