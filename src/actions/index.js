import axios from 'axios';
import Feed from 'rss-to-json';

export const FETCH_NEWS = 'FETCH_NEWS';


export function fetchNews(callback){

    //const request = axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FAmericas.xml');

    const request = new Promise(function(resolve,reject){
        Feed.load('http://rss.nytimes.com/services/xml/rss/nyt/Americas.xml', function(err, rss){
            if(rss){
                resolve(rss);
            }
        })
    });

    return {
        type: FETCH_NEWS,
        payload: request
    }
}