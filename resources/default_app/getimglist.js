var fs = require("fs");
var index = 0;var imgs = [];var temp = [];temp = fs.readdirSync(curdir);
len = temp.length;
//console.log(curimg);
for (f in temp){
  //console.log('file:'+temp[f]);
  if (temp[f].substr(-4,4).toLowerCase()=='.jpg' ||
    temp[f].substr(-4,4).toLowerCase()=='.png' ||
    temp[f].substr(-4,4).toLowerCase()=='.bpg' ||
    temp[f].substr(-5,5).toLowerCase()=='.webp'|| 
    temp[f].substr(-4,4).toLowerCase()=='.gif' ||
    temp[f].substr(-4,4).toLowerCase()=='.svg' ||
    //temp[f].substr(-4,4)=='.tif' ||
    temp[f].substr(-4,4).toLowerCase()=='.bmp' ) {
      imgs.push(temp[f]);
      //console.log('added:'+temp[f]);
      if (curimg == temp[f]){
        //console.log('match:'+temp[f]+' at '+imgs.length-1);
        index=imgs.length-1;
      }
    }
}
