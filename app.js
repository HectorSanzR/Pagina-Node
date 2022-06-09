require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port= process.env.PORT;






//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//servir contenido estatico 
app.use(express.static('public'))

// app.get('/', (req, res)=> {
//     // res.render('home',{
//     //     nombre: 'Hector Sanchez',
//     //     titulo: 'Curso de Node'
//     // });
//      res.sendFile(__dirname + '/public/index.html')
// })

// app.get('/generic', (req, res)=> {
//   res.render('generic',{
//     nombre: 'Hector Sanchez',
//     titulo: 'Curso de Node'
// });
  // })
  // app.get('/elements', (req, res)=> {
  //   res.render('elements',{
  //     nombre: 'Hector Sanchez',
  //     titulo: 'Curso de Node'
  // });
  // })

  app.get('*',(req,res)=>{
    res.sendFile( __dirname+ '/public/index.html')
  })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

