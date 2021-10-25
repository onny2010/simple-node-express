const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World...!');
});

const users = [
    { id: 28, name: 'Tonni', email: 'th.tonni@gmail.com', phone: '01654654654' },
    { id: 35, name: 'Onny', email: 'onny2010@gmail.com', phone: '01621133268' },
    { id: 29, name: 'shoumy', email: 'soumy@gmail.com', phone: '016254564548' },
    { id: 37, name: 'arnob', email: 'arnob@gmail.com', phone: '01626465564' },
    { id: 33, name: 'ahad', email: 'ahad@gmail.com', phone: '01621544555' },
    { id: 38, name: 'nobs', email: 'nobs@gmail.com', phone: '01621165445' }
]

app.get('/users', (req, res) => {

    const search = req.query.search;
    //  use query parameter
    if (search) {
        const searchResults = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResults);
    }
    else {
        res.send(users);
    }
})

// app method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log("hitting the post", req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'banana', 'guava', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok fazlis')
})

app.listen(port, () => {
    console.log('listening to port', port);
})