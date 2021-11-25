const axios = require ("axios");
const fs = require ('fs');


//WriteFile - axiosdan faylga yozish!
// axios
//     .post('https://jsonplaceholder.typicode.com/posts', {
//         userId: 123123,
//         title: 'Title',
//         body: 'hello world',
//     })
//     .then((response) => {
//         const userId = response['data']['userId'];
//         const title = response['data']['title'];
//         const body = response['data']['body'];
//         let content = `userId: ${userId}, title: ${title} body: ${body}.\n`
        
//         fs.writeFile('data.txt', content, err => {
//             if (err) {
//                 return err
//             }
//         });
//     })
//     .catch((err) => console.error('Error'+ err))


//Append fayl - Faylga qo'shib borish
axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        const datas = response.data;
        for (let i = 0; i < datas.length; i++){
            let userId = datas[i]['userId'];
            let id = datas[i]['id'];
            let title = datas[i]['title'];
            let body = datas[i]['body'];
            
            let content = `userId: ${userId}, title: ${title}, body: ${body}.\n`;
            fs.appendFile('data.txt', content, err => {
                if (err) {
                    return err();
                }
            });
        }
        // const userId = response['data']['userId'];
        // const title = response['data']['title'];
        // const body = response['data']['body'];
        // let content = `userId: ${userId},\n title: ${title},\n body: ${body}.\n`
        
    })
    .catch((err) => console.log(err));

