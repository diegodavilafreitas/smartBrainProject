const express = require('express');
const bodyParser = require('body-parser');
//IMPORTANTISIMO: body-parser extrae la información de una secuencia entrante y la expone en el req(request), este modulo analiza los datos JSON codificados enviados
//utlizando la solicitud HTTP POST. (instalar con "npm install --save body-parser")

const app = express();

app.use(bodyParser.json())
const database = {
    users: [
        {
            id: '123',
            name: 'Jhon',
            email: 'jhon@gmail.com',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'sally',
            email: 'sally@gmail.com',
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            has: '',
            email: 'john@gmail.com'
        }
    ]
}

app.get('/', (req, res)=>{
    res.send(database.users)
})

app.post('/signin',(req, res)=>{
    if(req.body.email === database.user[0].email && req.body.password === database.user[0].password){
        res.json('success');
    }else{
        res.status(400).json('error logging in')
    }
    res.json('signin')//res.send() tambien funciona con json pero utilizaremos json porque tiene unas mejoras en la funcionalidad ya que recibimos directamente el json.
})

app.post('/register', (req, res)=>{
    const {email, name, password} = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
        
    })
    res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id', (req, res)=>{
    const {id}=req.params;
    let found = false;
    database.users.forEach(user => {
        if(user.id === id) {
            found = true;
            return res.json(user);
        }
    })
    if(!found){
        res.status(404).json('not found')
    }
})

app.put('/image', (req, res)=>{
    const {id} = req.body;
    let found = false;
    database.users.forEach(user =>{
        if(user.id === id){
            found = true;
            user.entries++
            return res.json(user.entries);
        }
    })
        
    if(!found){
        res.status(404).json('not found')
    }
})

app.listen(3000, ()=>{
    console.log('app is running on port 3000');
})

/*
/root response --> res = this is working
/signin  --> POST = success/fail
/ register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
*/