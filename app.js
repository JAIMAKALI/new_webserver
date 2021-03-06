var express=require('express');

var app=express();

var hbs=require('hbs');

var port=process.env.PORT || 3000;

app.set('view engine','hbs');



// app.use((req,res,next)=>{
//   console.log('see you again');
//   res.render('warn.hbs');
//   next();
// })
app.use(express.static(__dirname +'/playground'));
hbs.registerHelper('title',()=>{
  return 'welcome back';
});
hbs.registerPartials(__dirname+'/views/partials');

app.get('/',(req,res)=>{

  res.send('hello world');
})
app.get('/home',(req,res)=>{

  res.render('home.hbs',{
  head:'this is awesome website',
  date:new Date().getFullYear()
  });
})

app.listen(port,()=>{
  console.log(`server is listening on port ${port}`);
})
