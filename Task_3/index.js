console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'uzb',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data recived', backendData)
//     }, 2000)
// }, 2000)

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'uzb',
//             port: 2000,
//             status: 'working'
//         }
//         resolve()
//     }, 2000)
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// })
// .then(clientData => {
//     clientData.formPromise = true
//     return clientData
// })
// .then(data => {
//     console.log('Modified', data)
// })
// .catch(err => console.error('Error', err))

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'uzb',
            port: 2000,
            status: 'working',
            itShouldResolve: true
        }
        resolve(backendData)
    }, 2000)
})

req.then((data) => {
    return new Promise((resolve, reject)  => {
        setTimeout(() => {
            if (data.itShouldResolve) {
                data.port = 8000
                resolve(data)
            } else {reject("itShouldResolve: = false")}
        }, 2000)
    })})
.then(data => console.log('Massage:', data))
.catch(err => console.error('Error: Boo: ' + err))
.finally(() => console.log("Connection is close with DB!!!"))