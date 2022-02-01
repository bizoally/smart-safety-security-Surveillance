var title1 =document.getElementById('title1');
var text1=document.getElementById('text1');
function changetext1(){

   text1.innerHTML='We Are working for Smart home with security Like User Can ON and OFF the appliances and can see the timing when it was open or close.';
}
function changetext2(){

    text1.innerHTML='It is protect homes from some kind of burglars by alerting the home owner about it';
 }
 function changetext3(){

    text1.innerHTML='We will add our switches at the switch board for appliances and gates and also we can use motion sensors';
 }
 function changetext4(){

    text1.innerHTML='text4';
 }
 function back(){
    text1.innerHTML=' <p class="showonce">Click on the Title You Want to Know about</p> ';
 }
 var mobcount=0;
 var mobicon=document.getElementById('mob-icon');
 function showmobmenu(){
   mobcount+=1;
   mobicon.style.display='block';
if (mobcount==2){
   mobicon.style.display='none';
   mobcount -=2
}
 }
 var faqopen=0
 function showfaq(){
   var faqitem=document.getElementById('faq1').style.display='block';
   faqopen +=1;
   if (faqopen==2){
      var faqitem=document.getElementById('faq1').style.display='none';
      faqopen =0
   }

 }
 var faqopen2=0
 function showfaq2(){
   var faqitem2=document.getElementById('faq2').style.display='block';
   faqopen2 +=1;
   if (faqopen2==2){
      var faqitem2=document.getElementById('faq2').style.display='none';
      faqopen2 =0
   }

 }
 var faqopen3=0
 function showfaq3(){
   var faqitem3=document.getElementById('faq3').style.display='block';
   faqopen3 +=1;
   if (faqopen3==2){
      var faqitem3=document.getElementById('faq3').style.display='none';
      faqopen3 =0
   }

 }
