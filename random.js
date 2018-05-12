<script type='text/javascript'> 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) )
{

var txtGreeting = 1; // amount of videos intended to be displayed	
var randomCount = Math.round(Math.random() * (txtGreeting - 1)) + 1;
var greeting = new Array();
//greeting[1] = &quot;<iframe frameborder='0' height='300' quality='720p' src='https://www.youtube.com/embed/pZ3cTwI9bIw?autoplay=1' width='1000'/>&quot;
greeting[1] = &quot;<iframe frameborder='0' height='300' quality='720p' src='https://www.youtube.com/embed/QkP1-Xpv_iY?autoplay=1' width='1000'/>&quot;
greeting[2] = &quot;<iframe frameborder='0' height='300' quality='720p' src='https://www.youtube.com/embed/9fZoINtQMVo?autoplay=1' width='1000'/>&quot;
//greeting[3] = &quot;<iframe frameborder='0' height='300' src='https://www.youtube.com/embed/AZzN6AC8zXU?autoplay=1' width='100%'/>&quot;
//greeting[4] = &quot;<iframe frameborder='0' height='300' src='https://www.youtube.com/embed/tnBQmEqBCY0?autoplay=1' width='100%'/>&quot;
//greeting[5] = &quot;<iframe frameborder='0' height='300' src='https://www.youtube.com/embed/tnBQmEqBCY0?autoplay=1' width='100%'/>&quot;
document.write(greeting[randomCount]); 
}

else 

{ 

var txtGreeting = 1;
var randomCount = Math.round(Math.random() * (txtGreeting - 1)) + 1;
var greeting = new Array();
greeting[1] = &quot;<iframe frameborder='0' height='400' quality='720p' src='https://www.youtube.com/embed/QkP1-Xpv_iY?autoplay=1' width='1000'/>&quot;
greeting[2] = &quot;<iframe frameborder='0' height='400' quality='720p' src='https://www.youtube.com/embed/9fZoINtQMVo?autoplay=1' width='1000'/>&quot;
//greeting[3] = &quot;<iframe frameborder='0' height='400' src='https://www.youtube.com/embed/tnBQmEqBCY0?autoplay=1' width='1000'/>&quot;
//greeting[4] = &quot;<iframe frameborder='0' height='400' src='https://www.youtube.com/embed/tanaU2Vnfys?autoplay=1' width='1000'/>&quot;
//greeting[5] = &quot;<iframe frameborder='0' height='250' src='https://www.youtube.com/embed/pa2HRB-nojo?autoplay=1' width='100%'/>&quot;;
document.write(greeting[randomCount]); 
}

</script>