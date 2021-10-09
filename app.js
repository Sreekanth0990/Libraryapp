const express = require('express');
const app = express();
const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}];

const booksrouter = require('./src/routes/bookRoute')(nav)
//const Authorrouter = require('./src/routes/AuthorRoute')(nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','C:/Users/user/Desktop/LibraryApp/src/views')
app.use('/books',booksrouter);
//app.use('/Authors',Authorrouter);

app.get('/',function(req,res){
    res.render("index",
    {nav,title:'Library'});
    //res.sendFile("C:/Users/user/Desktop/LibraryApp/src/views/index.html");
});

app.listen(5000);