// const express = require ('express');
// const mongoose = require ('mongoose');
// const cors = require ('cors');


// const app = express ();

// app.use (express.json());
// app.use (cors());

// mongoose.connect ('mongodb://127.0.0.1:27017/react-todo',{
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// })
//     .then(()=> console.log("connected to DB"))
//     .catch(console.error);

// // creating a connection for the todo 
// const Todo = require ('./models/Todo');

// app.get("/todos",async(req,res)=>{
//     const todos = await Todo.find();

//     res.json(todos);
// });

// // app.post('/todo/new',(req,res)=>{
// //     const todo = new Todo({
// //         text:req.body.text
// //     });
// //     todo.save();
// //     res.json(todo);
// // });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/react-todo', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

// Models
const Todo = require('./models/Todo');

app.get('/todos', async (req, res) => {
	const todos = await Todo.find();

	res.json(todos);
});




app.listen (3001, () => console.log ("Server Started on Port 3001 "));

