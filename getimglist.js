var fs = require("fs");
var index = 0;var imgs = [];var temp = [];temp = fs.readdirSync(curdir);
len = temp.length;
//console.log(curimg);
for (f in temp){
  //console.log('file:'+temp[f]);
  if (temp[f].substr(-4,4)=='.jpg' ||
    temp[f].substr(-4,4)=='.png' ||
    temp[f].substr(-4,4)=='.bpg' ||
    temp[f].substr(-5,5)=='.webp'|| 
    temp[f].substr(-4,4)=='.gif' ||
    temp[f].substr(-4,4)=='.svg' ||
    temp[f].substr(-4,4)=='.bmp' ) {
      imgs.push(temp[f]);
      //console.log('added:'+temp[f]);
      if (curimg == temp[f]){
        //console.log('match:'+temp[f]+' at '+imgs.length-1);
        index=imgs.length-1;
      }
    }
}
