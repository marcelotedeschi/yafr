import Feed from 'rss-to-json';

export const FETCH_NEWS = 'FETCH_NEWS';

export function fetchNews(callback) {
  const request = new Promise((resolve, reject) => {
    Feed.load('http://rss.nytimes.com/services/xml/rss/nyt/Americas.xml', function(err, rss) {
      if (rss) {
        resolve(rss);
      }
    })
  });

  return { type: FETCH_NEWS, payload: request }
}
