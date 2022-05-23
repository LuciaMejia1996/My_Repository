// fetch(
//     'https://uvodscp-lh.akamaihd.net/i/mgvc19rtmp_1@460436/master.m3u8?hdnts=exp=1651792642~acl=/*~hmac=9f4ddacda90a0322c11d3da0d27d5ed1f4ae9a00f9451d7b3d79f89e63b5f20b'
// ),
//     {
//         headers: {
//             accept: '*/*',
//             'accept-language': 'en-US,en;q=0.9,es;q=0.8',
//             'sec-fetch-dest': 'empty',
//             'sec-fetch-mode': 'cors',
//             'sec-fetch-site': 'cross-site',
//         },
//         referrer: 'https://megavision.univtec.com/',
//         referrerPolicy: 'strict-origin-when-cross-origin',
//         body: null,
//         method: 'GET',
//         mode: 'cors',
//         credentials: 'omit',
//     }
//         .then((res) => {
//             return res.blob();
//         })
//         .then((data) => {
//             const a = document.createElement('a');
//             a.href = window.URL.createObjectURL(data);
//             console.log(data);
//             a.download = `${Date()}.m3u8`;
//             a.click();
//         });
// *//

//añom mes [0-11] y dia [0-6]
const year = new Date(2022, 0, 1);
console.log(year);
