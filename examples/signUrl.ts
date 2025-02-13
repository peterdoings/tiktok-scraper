import rp from 'request-promise';

import { signUrl, ItemListData } from '../src';

(async () => {
    try {
        const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0) Gecko/20100101 Firefox/74.1';
        // const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36';
        const url = 'https://www.tiktok.com/share/item/list?secUid=&id=&type=5&count=30&minCursor=0&maxCursor=0&shareUid=&lang=en';

        const signature = await signUrl(url, { userAgent });

        const result: ItemListData = await rp({
            uri: `${url}&_signature=${signature}`,
            headers: {
                'user-agent': userAgent,
            },
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();
