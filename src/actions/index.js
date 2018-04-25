import axios from 'axios';
import { parseString as parseXML } from 'xml2js';

export const FETCH_FEED = 'FETCH_FEED';

export function fetchFeed(callback) {
  const request = new Promise((resolve, reject) => {
    axios.get('http://rss.nytimes.com/services/xml/rss/nyt/Americas.xml')
      .then((response) => {
        parseXML(response.data, (err, result) => {
          resolve(result.rss.channel[0]);
        });
      })
      .catch((error) => {
        // TODO: Decide how to handle errors (show notification?)
        reject(error);
      });
  });

  return { type: FETCH_FEED, payload: request }
}
