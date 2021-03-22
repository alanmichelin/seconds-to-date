function formatDuration (seconds) {

  var seconds = document.querySelector("#seconds").value
  var result = document.querySelector('h1')
  console.log(seconds)
    var years = seconds/31536000// seconds in a year
    var days = (years - Math.trunc(years))*365 // year to days
    var hs = (days - Math.trunc(days))*24// days to hours
    var min = (hs - Math.trunc(hs))*60 //  hours to min
    var sec = Math.round((min - Math.trunc(min))*60)  // min to secs
    var timer = [] 
  
    if(seconds==0) return result.innerText='now'
    
    if(sec==60){   // this is just to fix a decimal bug
      min = min+1
      sec = 0
      }
    
    if(years>=1){
  
      if(Math.trunc(years)===1) timer.push(Math.trunc(years) + ' year') 
      if(Math.trunc(years)>1) timer.push(Math.trunc(years) + ' years') 
      }
    
    if(days>=1){
  
      if(Math.trunc(days)===1) timer.push(Math.trunc(days) + ' day') 
      if(Math.trunc(days)>1) timer.push(Math.trunc(days) + ' days') 
      }
    
    if(hs>=1){
  
      if(Math.trunc(hs)===1) timer.push(Math.trunc(hs) + ' hour') 
      if(Math.trunc(hs)>1) timer.push(Math.trunc(hs) + ' hours') 
    }
    
    if(min>=1){
  
      if(Math.trunc(min)==1) timer.push(Math.trunc(min) + ' minute') 
      if(Math.trunc(min)>1) timer.push(Math.trunc(min) + ' minutes') 
    }
    
    if(sec>=1){
  
      if(Math.round(sec)==1) timer.push(Math.round(sec) + ' second') 
      if(Math.round(sec)>1) timer.push(Math.round(sec) + ' seconds') 
    }
    
    timer = timer.join(', ')
    
    if(timer.lastIndexOf(',') !== -1){
      
    timer = timer.substr(0,timer.lastIndexOf(',')) + ' and' + timer.substr(timer.lastIndexOf(',')+1) 
  }

    return result.innerText= `${seconds} seconds in date format would be: ${timer}`
  }