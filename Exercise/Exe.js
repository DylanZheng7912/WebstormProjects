var exec = require('child_process').exec;
var child = exec('java -jar FbPageToDB.jar Shopping187 EAAYt72PgZCS8BAEZCWjYCqQyJGnCEn22ziPsgZA63umLD9X0R8jm8aoi11xZBp38ddScfYoUxz00Q70pdvErXWvxndKlZALMZAy1ju4K1sBZAvtYSZBAIuO51W6vJJRy8ZBV2ZB2Ehs4vL3rReBBTzoGKlFz5ZBjQ3K0xBiEvOZCcP8cWQZDZD',
//var child = exec('java -jar D:/FbPostToDB.jar 363962523940268 EAAYt72PgZCS8BAEZCWjYCqQyJGnCEn22ziPsgZA63umLD9X0R8jm8aoi11xZBp38ddScfYoUxz00Q70pdvErXWvxndKlZALMZAy1ju4K1sBZAvtYSZBAIuO51W6vJJRy8ZBV2ZB2Ehs4vL3rReBBTzoGKlFz5ZBjQ3K0xBiEvOZCcP8cWQZDZD',
//var child = exec('java -jar D:/FbCommentToDB.jar 363962523940268 EAAYt72PgZCS8BAEZCWjYCqQyJGnCEn22ziPsgZA63umLD9X0R8jm8aoi11xZBp38ddScfYoUxz00Q70pdvErXWvxndKlZALMZAy1ju4K1sBZAvtYSZBAIuO51W6vJJRy8ZBV2ZB2Ehs4vL3rReBBTzoGKlFz5ZBjQ3K0xBiEvOZCcP8cWQZDZD',
///var child = exec('java -jar D:/FbRecommentToDB.jar 363962523940268 EAAYt72PgZCS8BAEZCWjYCqQyJGnCEn22ziPsgZA63umLD9X0R8jm8aoi11xZBp38ddScfYoUxz00Q70pdvErXWvxndKlZALMZAy1ju4K1sBZAvtYSZBAIuO51W6vJJRy8ZBV2ZB2Ehs4vL3rReBBTzoGKlFz5ZBjQ3K0xBiEvOZCcP8cWQZDZD',
    function (error, stdout, stderr){
        console.log('Output -> ' + stdout);
        if(error !== null){
            console.log("Error -> "+error);
        }
    });

module.exports = child;
