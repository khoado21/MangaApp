const axios = require('axios');

const READING_CHAPTER = (url) =>
    axios.get(url)
    .then((res) => {
        const cheerio = require('cheerio');
        const $ = cheerio.load(res.data);
        let data = [];
        $('.page-chapter img').map((index, item) => {
            let img = item.attribs['data-original'];
            console.log(img);
            data.push(img);
        });

        return data;
    }).catch(e => console.log('Error: '+e));

export default READING_CHAPTER;
