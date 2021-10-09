const express = require('express');
const booksrouter = express.Router();
function router(nav){

    
var booksarr=[
    {
        title:'tom and jerry',
        author:'joseph barbera',
        genre:'cartoon',
        img:'tom.webp'
    },
    
    {
        title:'Harry potter',
        author:'J K Rowling',
        genre:'fantasy',
        img:'harry.jpg'
    },
    {
        title:'tom and jerry',
        author:'joseph barbera',
        genre:'cartoon',
        img:'harry.jpg'
    }
    
    ]
    
    booksrouter.get('/',function(req,res){
        res.render("books",
        {nav,title:'Books',booksarr});
        //res.sendFile("C:/Users/user/Desktop/LibraryApp/src/views/index.html");
    });
    
    booksrouter.get('/:id',function(req,res){
        const id =req.params.id;
        res.render("book",
        {nav,title:'Books',book:booksarr[id]});
        //res.sendFile("C:/Users/user/Desktop/LibraryApp/src/views/index.html");
    });

    return booksrouter;

}


    module.exports = router;