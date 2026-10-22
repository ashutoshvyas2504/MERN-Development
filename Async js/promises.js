<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
    let breadPromise =new promise(function(resolve,reject){
setTimeout(function(){
    if(false){
        resolve("Bread is cutted");
    }else{
        reject("Error Occuured in bread cutteng");
    }
},2000);
    });
    close.log(breadPromise);



     
    function cutTheBresad(raw){
        return new Promise (function(resolve,reject){
            setTimeout(function(){
                if(raw){
                    resolve("cutted Bread");
                }else{
                    reject("Reject of cutted the bread");
                }
            },2000);
        })
    }
    console.log("started");
    cutTheBresad("Bread");
    .then(function(data){
        console.log("the called",data);
    })
    .catch(function(err){
        console.log("catch called",err);
    });
    console.log("End");

    


      console.log("started");
    cutTheBresad("Bread");
    .then(function(data){
        console.log(data);
        return addStuffings(data);
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log("catch called",err);
    });
    console.log("End");
    
   </script>
</body>
</html>