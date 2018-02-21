var http = require('http');
var fs = require('fs');
var vm = require('vm');
var path = require("path");
var downloadFile = require('download-file')

var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);
    });
  });
}


fs.readFile('data/115/data.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }

    
    //data = "var files=" + data;
    /*vm.runInThisContext(data, {
        console: console,
    });*/
    var files = JSON.parse(data);
    console.log(files.files);
    var files = files.files;
    for (var i = 0; i < files.length; i++) {
        console.log();
        var dest = 'D:\\jscodes\\decodejs\\4dage\\SuperPanoramic\\images\\images117\\'+ files[i];
        var dir = path.dirname(dest);
       /* if (!fs.existsSync(dir)){
            fs.mkdirSync(dir,0777);
        }*/
        //console.log(path.basename(dest));

        if(!fs.existsSync(dest)) {
            downloadFile('http://bigscene.4dage.com/images/images115/' + files[i],{
                directory: dir,
                filename: path.basename(dest)
            }, function(err){
                //if (err) throw err
                if(fs.existsSync(dest)) {
                    fs.unlink(dest,function(error) {
                        console.log('Deleted dog.jpg!!');
                    });
                }
                console.log(err)
            })

           /*download('http://bigscene.4dage.com/images/images115/' + files[i],dest,function(err){
                //if (err) throw err
                console.log(err)
            });*/
        }

        
        //
    }

});
