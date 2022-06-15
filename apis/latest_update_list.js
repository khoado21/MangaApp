const axios = require('axios');

const LATEST_UPDATE = (page) =>
    axios.get('https://truyentranhaudio.online/?page='+page)
    .then((res) => {
        const cheerio = require('cheerio');
        const $ = cheerio.load(res.data);
            const items = $('#ctl00_divCenter .items .item .clearfix div.image > a')
            .map((index, item) => {
                let image = item.childNodes[1].attribs['data-original'];
                if(!image.includes('http')) image = 'http:'+image;
                return {
                    title: item.attribs.title.replace('Truyện tranh ',''),
                    url:"https://truyentranhaudio.online"+ item.attribs.href,
                    thumbnail: image,
                    index: index
                };
            });

        return items;
    }).catch(e => console.log('Error: '+e));

export default LATEST_UPDATE;
