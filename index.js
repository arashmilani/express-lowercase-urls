module.exports = function(req, res, next){
  if(req.url !== req.url.toLowerCase()){
    res.redirect(req.url.toLowerCase());
  } 
  else{
    next();
  }
}
