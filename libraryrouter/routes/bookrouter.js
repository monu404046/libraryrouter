var express = require('express')
const router = express.Router();
var book_arr = [
    {
       title:"Raavan: Enemy of Aryavarta",
       genre:"Fiction",
       author:"amish",
       image:"https://images-na.ssl-images-amazon.com/images/I/51Q8UGbvQlL._SX321_BO1,204,203,200_.jpg"     
    },
    {
        title:"The Secret Of The Nagas (Shiva Trilogy-2)",
        genre:"Fiction",
        author:"amish thripathi",
        image:"https://images-na.ssl-images-amazon.com/images/I/51nvQhEmAtL._SX323_BO1,204,203,200_.jpg"
    },
    {
        title:"The Alchemist",
        genre:"Fiction",
        author:"Paulo Coelho",
        image:"https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"   
    }
]   
module.exports = router;
router.get("/",function(req,res){
    res.render("books",{pTitle:"Books",nav:[{link:"/book",title:"Book"},{link:"/auth",title:"Author"}],books:book_arr});
})
router.get("/sp/:id",function(req,res){
    res.render("bookdesc",{pTitle:"Books",nav:[{link:"/book",title:"Book"},{link:"/auth",title:"Author"}],books:book_arr[req.params.id]});
 })
