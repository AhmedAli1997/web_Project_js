    		/*jslint plusplus:true,prompt, evil:true*/
        /*global console, document*/

        var photo=document.getElementById("lett_img");
        var sub=document.getElementById("s");
    	var letter=document.getElementById("lett");
        var number=document.getElementById("n");
        var message =document.getElementById("mes");
    		function ob(_time,_target,_event)
			{
				this._event=_event;
				this._target=_target;
				this._time=_time;
			}
			
           window.addEventListener("load",function(e){
			   var ob1=new ob();
			   ob1._event=e.type;
			   ob1._time=new Date();
			   var m=ob1._time+"&"+ob1._event+"&"+"load";
			   if(!localStorage.getItem("load"))
			   {
				   localStorage.setItem("load",m);
			   }
			   else
			   {
				   var arr=new Array(localStorage.getItem("load"));
				   arr.push(m);
				   localStorage.setItem("load",arr);
			   }
			   
		   });
		   
		   //setInterval(function(){localStorage.clear();},5000);
		       window.addEventListener("unload",function(e){
			   var ob1=new ob();
			   ob1._event=e.type;
			   ob1._time=new Date();
			   var m=ob1._time+"&"+ob1._event+"&"+"unload";
			   if(!localStorage.getItem("unload"))
			   {
				   localStorage.setItem("unload",m);
			   }
			   else
			   {
				   var arr=new Array(localStorage.getItem("unload"));
				   arr.push(m);
				   localStorage.setItem("unload",arr);
			   }
			   
		   });
		   
		   
    		var ABC=
    		["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
              
              

        function random()
        {
          var n=Math.floor(Math.random()*26);
          return n;

        }
         
         



           sub.addEventListener("click",function(e){
			      
			    var ob1=new ob();
			   ob1._event=e.type;
			   ob1._target=e.target.value;
			   ob1._time=new Date();
			   var m=ob1._target+"&"+ob1._time+"&"+ob1._event;
			   if(!localStorage.getItem("sub"))
			   {
				   localStorage.setItem("sub",m);
			   }
			   else
			   {
				   var arr=new Array(localStorage.getItem("sub"));
				   arr.push(m);
				   localStorage.setItem("sub",arr);
			   }
				  
				  
				  
				    var arr=[];
                   
                   var num=number.value;
                   

                   if(num==0||num<0)
                   {
                    message.innerHTML="";
                    message.innerHTML="Please Enter Positive Number";
                  lett.innerHTML="";
                   
                    
                   }
                   
                   if(num>26)
                   {
                   message.innerHTML="";
                   message.innerHTML="Please Enter Number Less Than 26.";
                    lett.innerHTML="";
                  
                   }
                   
                   if(num!==0 && num>0 && num<27)
                   {
                    
                    
                    
                   message.innerHTML="";
                  lett.innerHTML="";
                    
                    
                    
                    
                    
                    for(var j=0;j<num;j++)
                  {


                     var NR=random();
                     var ran=NR;
                     arr[j]=ran;
                  }
                    
                    for(var arn=0;arn<arr.length;arn++)
                    {
                      
                      
                      var next=1;
                      for(;next<arr.length;next++)
                      {
                        
                        while(arr[next]==arr[arn] && arn!=next )
                        {

                             arr[next]=random();

                          
                        }


                      }
                      next+=1;
                      
                    }
                   
                   
                    //create the spans of letters.
                    
                    
                    
                   message.innerHTML="";
                   lett.innerHTML="";
                    
                    for(var i=0;i<arr.length;i++)
                    {
                      var BTN=document.createElement("input");
					  BTN.setAttribute("type","submit");
					  //BTN.setAttribute("id","AA");
					  BTN.setAttribute("value",(ABC[arr[i]]));
					  
                      //BTN.value=(ABC[arr[i]]);
                     //BTN.appendChild(BTN.value);
                      letter.appendChild(BTN);
                      
                    }
           

                var picture=document.getElementById("lett_img");
                var list=document.getElementsByTagName("input");
                //document.write(listspan.length);

                  for(var m=0;m<list.length;m++)
                  {
                  list[m].addEventListener("click",function(e)
                     {
						 			    var ob1=new ob();
			   ob1._event=e.type;
			   ob1._target=e.target.value;
			   ob1._time=new Date();
			   var m=ob1._target+"&"+ob1._time+"&"+ob1._event;
			   if(!localStorage.getItem("list"))
			   {
				   localStorage.setItem("list",m);
			   }
			   else
			   {
				   var arr=new Array(localStorage.getItem("list"));
				   arr.push(m);
				   localStorage.setItem("list",arr);
			   }
                      var abc=this.value+".jpg";
                        picture.setAttribute("src",abc);
                     });
                   }

                 
              

                
                    
                   }
                 
          

			   
			   
			   
		   });
           
          
          //////////////////////
		  
		               
		   setInterval(function(){
                 /////////////////////////////////////////////////////
                     
                    var container=[];
                    var Alph=[];
                    var Loading=[];
                    var UnLoading=[];
                    var Generate=[];
                    var C=0;
            
                      
                            if(localStorage.getItem("load"))
                    {
                      
                        Loading=localStorage.getItem("load").split(',');
                        console.log(Loading[0]);
                        for(var x=0;x<Loading.length;x++)
                        {
                          
                            var localString=Loading[x].split('&');
                           container[C]=new ob(localString[0],localString[2],localString[1]);
                            C++;
                        }
                      
                    }
            
                    if(localStorage.getItem("unload"))
                    {
                      
                        UnLoading=localStorage.getItem("unload").split(',');
                        
                        console.log(UnLoading[0]);
                          for(var x2=0;x2<UnLoading.length;x2++)
                        {
                            var localString2=UnLoading[x2].split('&');
                            container[C]=new ob(localString2[0],localString2[2],localString2[1]);
                             C++;
                        }
                      
                    }
                    
                    
                    if(localStorage.getItem("sub"))
                    {
                      
                        Generate=localStorage.getItem("sub").split(',');
                        //we must make array of objects to recieve all events from local storage.
                        ////////////////////////////
            
                        for(var x1=0;x1<Generate.length;x1++)
                        {
                            var localString1=Generate[x1].split('&');
                            container[C]=new ob(localString1[0],localString1[2],localString1[1]);
                            C++;
                        }
            
                    }
                    
                    if(localStorage.getItem("list"))
                    {
                      
                      Alph=localStorage.getItem("list").split(',');
                        for(var x3=0;x3<Alph.length;x3++)
                        {
                            var localString3=Alph[x3].split('&');
                            container[C]=new ob(localString3[0],localString3[2],localString3[1]);
                               C++;
                        }
                                  
                    }
                         
                            

                              $.ajax({
                              "type": "POST",
                              "url": "project.php",
                              "data": {"object":JSON.stringify(container)},
                              "success": function(response){
                               console.log(response);
                               localStorage.clear();
                               
                               
                              }
                           });

 
                },5000);





               $("#btt").on("click",function(){
                 $.ajax({
                     "type": "GET",
                     "url": "project.php",
                     "data": {"person": ""},
                     "success": function(response){
                      
                             if(response)
                             {
                                                            
                                    
                                     var s="";
                                      var persons =JSON.parse(response);
                                        console.log(persons);
                                        $.each(persons,function(x){
                                            //   x=JSON.stringify(x);
                                        s="The Event : "+persons[x]['_event']+"."+"<br>"+"The time : "+persons[x]['_time']+"."+"<br>"+"The target :  "+persons[x]['_target']+"."+"<br>";
                                        s+="________________________________________________________<br>";
                                        $("#displaydata").append(s+"<br>");
                                  
                                        });                             
                             }
                             
                             else{
                              $("#displaydata").text("no data to show");
                             }
                             
                             
                     
                     }
                 });
                
                
                
                });
              

