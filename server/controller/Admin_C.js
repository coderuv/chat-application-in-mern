

const admin_info = require("../model/Admin_model");
const item_info = require("../model/item_model");

exports.Insert = (req, res)=> {

 
    const {Request} = req.body;
    let firstpart = Request.slice(0, 3);
    let  lastpart = Request.slice(Request.length - 19);
    console.log(firstpart);
    console.log(lastpart);
    if(Request=="Hey How are you?")
    {
        res.send("Hello  I am doing great");
    }
  else  if(Request=="Clean My room?")
    {
       
      async  function check(){
        var now = new Date();
        now.setMinutes(now.getMinutes() - 10); // timestamp
        now = new Date(now); // Date object
        console.log(now);
        let chktime = await admin_info.find({$and:[{Request:Request},{time:{ $gt: now }}]});

         if(chktime.length!=0){
         console.log(chktime);

            console.log(chktime[0].time);
            //  console.log(Date.now());
            res.send("Room is already cleaned at "+chktime[0].time)


         
         }else{
            //  let add = new admin_info({
            //     Request:Request,
            
            // });
        
            // add.save().then(res.send("Room is cleaned")).catch((err) => { res.send("Something gone wrong") });
            var now = new Date();

            admin_info.update({ _id: "6284c4507af92b648dd75163"}, {time:now}, function (err, result) {
                res.send("Room is cleaned")  ;
            });





        }
        
 }//closing of else

     
    


    check();




    }

    else  if(Request=="Fetch the newspaper")
    {
       
      async  function check1(){
  
        var now = new Date();
        now.setDate(now.getDate() - 1); // timestamp
        now = new Date(now); // Date object
        console.log(now);
        let chktime = await admin_info.find({$and:[{Request:Request},{time:{ $gt: now }}]});
        // time.getHours() >=24
         if(chktime.length!=0){
         console.log(chktime);

            console.log(chktime[0].time);
            //  console.log(Date.now());
            res.send("I think you dont get another newspaper the same day "+chktime[0].time)


         
         }else{
           
            var now = new Date();

            admin_info.update({ _id: "6284d166d0936872dc933e7e"}, {time:now}, function (err, result) {
                res.send("Here is your  newpaper")  ;
            });



        }
        
 }//closing of else

     
    


    check1();




    }


  
    else  if(Request=="Read my shopping list")
    {
        
            async function fechItem(){

                let item_chk =  await item_info.find();
                if(item_chk.length==0){
                    res.send("You have no item in your shopping list");

                }else{
                    let res_item="";
                    for(var i=0;i<item_chk.length;i++){
                        res_item = item_chk[i].item_name+" , "+res_item;
                    }
    
                    res.send("Here is your shopping list"+res_item);
                }
                
            }
     


                fechItem();

    }
    else  if(firstpart=="Add"&&lastpart=="to my shopping list")
    {
        let item = Request.slice(3, Request.length-19);
     async function checkitem(){

        let item_chk =  await item_info.find({item_name:item});
       
       if(item_chk.length!=0){

        res.send("You already have "+item+"in your shoppping list");

       }else{
        let add = new item_info({
            
            item_name:item,
        
        });
    
        add.save().then(res.send(item+" added to your shopping list")).catch((err) => { res.send("Something gone wrong") });

       }
         
        }
            checkitem();


    }
    else  if(Request=="How` s the weather outside?")
    {
        res.send("  Its pleasent  outside .you should take a walk ");
    }
    else  if(Request=="How much is 5+2 ?")
    {
        res.send("Hmm .. I dont know that ");
    }
    else{
        res.send("Hmm .. I dont know that ");
    }

    
  
}










