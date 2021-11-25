const express = require('express');
const path = require('path');
const app = express();
const members = require('./public/members');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server has been started on the port ${PORT} ...`);
});

// app.get( '/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public', '/public/about.html'));
// });

app.use(express.static(path.join(__dirname, '/public')));

// middleware

const logger = (req, res, next) => {
    //console.log('Hello World!');
    console.log(`${'Middleware'}`);
    next();
};
app.use(logger);
app.get('/api/members', (req, res) => {
    res.json(members);
});

app.get('/api/members/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(members => members.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `ID_${req.params.id} topilmadi`});
    }
});

// app
// .post('/api/members/:id',    {})
// .then((response) => {
//             const id = response['members']['id'];
//             const name = response['members']['name'];
//             const adress = response['members']['adress'];
//             let content = `id: ${id}, name: ${name}, adress: ${adress}.\n`
            
//             fs.appendFile('./public/members.js', content, err => {
//                 if (err) {
//                     return err
//                 }
//             });
//         })
//         .catch((err) => console.error('Error'+ err));
