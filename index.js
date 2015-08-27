module.exports = function(req, res, next){
  if(req.url !== req.url.toLowerCase()){
    res.redirect(301, req.url.toLowerCase());
  } 
  else{
    next();
  }
}
