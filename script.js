var title1 =document.getElementById('title1');
var text1=document.getElementById('text1');
function changetext1(){

   text1.innerHTML='COVID-19 is a disease caused by a virus called SARS-CoV-2. Most people with COVID-19 have mild symptoms, but some people can become severely ill. Although most people with COVID-19 get better within weeks of illness, ';
}
function changetext2(){

    text1.innerHTML='Handwashing is one of the best ways to protect yourself and your family from getting sick. Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, ';
 }
 function changetext3(){

    text1.innerHTML='text1';
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
 function showfaq2(){
   var faqitem=document.getElementById('faq2').style.display='block';
   faqopen +=1;
   if (faqopen==2){
      var faqitem=document.getElementById('faq2zzz').style.display='none';
      faqopen =0
   }

 }
 function showfaq3(){
   var faqitem=document.getElementById('faq3').style.display='block';
   faqopen +=1;
   if (faqopen==2){
      var faqitem=document.getElementById('faq3').style.display='none';
      faqopen =0
   }

 }
