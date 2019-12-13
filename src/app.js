const path=require('path')
const express=require('express');
const hbs=require('hbs')
const app=express()
//const geocode=require('./utils/geocode')
//const forecast=require('./utils/forecast')
//Define path for express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const PartialsPath=path.join(__dirname,'../templates/partials')
//Setup handlebars engine and view location
  app.set('view engine','hbs')
  app.set('views',viewsPath)
  hbs.registerPartials(PartialsPath)
  app.use(express.static(publicDirectoryPath))
app.get('',(req,res)=>{
        res.render('index',{
          title:'Weather',
          name:"vinayak singh"
        })
})
  app.get('/about',(req,res)=>{
    res.render('about',{
      title:'About dogs',
      name:"Tommy"
    })
  })
app.get('/weather',(req,res)=>{
     res.send([{
       forecast:'it is snwoing',
       location:'Hyderabad',
       address:'america'   
     }])
    
app.get('/help',(req,res)=>{
   res.render('help',{
     title:'Help',
  helptext: 'May I Help You' ,
  name:'Vinayak Singh'
   })
  })
app.get('/products',(req,res)=>{
  if(!req.query.search){
    return res.send({
      error:'You must provided a search term'
    })
  }
  console.log(req.query.search)
  res.send({
    products:[]
  }
    
  )
})
app.get('/help/*',(req,res)=>{
  res.render('404',{
    title:'404',
    name:'vinayak singh',
    errorMessage:"Help artcile not found."
  })
})
app.get('*', (req,res)=>{
  res.render('404',{
    title:'404',
    name:'vinayak singh',
    errorMessage:'Help article not found'
  })
})

})
app.listen(3000,()=>{
    console.log('3000 server is started')
})