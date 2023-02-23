const { render } = require('ejs');
const ex= require('express');
//database
const mongo= require('mongoose');
mongo.set('strictQuery',true);
//--------------------------------------------
const app = ex();

app.set('view engine','ejs');
app.use(ex.static('public'));
//-----------------------------------------------------
 const loc_data= require('./models/str_data');
 app.use(ex.urlencoded({extended:false}));
//---------------------------------
app.get('/',(r,s)=>{
    s.render('index');
});
// const data_sr= require('./views/show_data');
//---conncetion database---
mongo.connect('mongodb+srv://mohamedsalah:mse@cluster0.oyuybnh.mongodb.net/info_data?retryWrites=true&w=majority').then(()=>{
  app.listen(3000,()=>{
        console.log("The Server It IS Done...");
  })
}).catch((err)=>{
        console.log(err);
});
//---conncetion database---

//saving database 
app.post('/show_data',(e,r)=>{

  const scan_Data= new loc_data(e.body);

  scan_Data.save().then(()=>{

        r.redirect('show_data');

  }).catch((err)=>{
      console.log(err);
  });

});

app.get('/show_data',(e,r)=>{

  loc_data.find().then((database)=>{
        r.render('show_data',{items_now:database })
  }).catch((err)=>{
    console.log(err);
  });


app.get('/part/:id',(e,s)=>{

    loc_data.findById(e.params.id).then((data)=>{
     
         s.render('part',{pp:data.notes});
         
    }).catch(()=>{

    });

});

});










