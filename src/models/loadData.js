import axios from 'axios'

export const getUrl = (type, parameter) => {
    let url;
    switch (type) {
        case 'article':
            url = `https://www.financialexpress.com/wp-json/wp/v2/single/story/${parameter['id']}`;
            break;
        default :
            url = parameter['url'];
    }
    return url
}

export function fetchData(url) {
    return axios.get(url).catch(err => err)
}