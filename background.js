function poll(){
  if(localStorage["userEmail"]){
    console.log('polling');
  }
}

//every 5 seconds
setInterval(poll, 5000);
