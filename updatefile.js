var fs= require('fs');
fs.appendFile('textfile.txt','hello i am megha',function(err,updated)
{
    console.log('updated')
});
