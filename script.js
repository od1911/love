
var love = setInterval(function(){
  var r_num = Math.floor(Math.random() * 40) + 1;
	var r_size = Math.floor(Math.random() * 65) + 10;
	var r_left = Math.floor(Math.random() * 100) + 1;
	var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
  
  $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
  
  
},500);

var i = 0;
var txt1 = "<<< Mi querida princesa <<< Habia una vez un caballero de armadura oxidada no porque no supiera como cuidarla sino porque en su torpeza no siempre supo proteger lo que mas amaba << Ese caballero armado de suenos y esperanzas cruzo desiertos y enfrento dragones pero no fue hasta que te encontro mi princesa que entendio lo que era realmente luchar por algo valioso << Tu luz ilumino los rincones mas oscuros de su corazon y aunque en su camino cometio errores siempre ha sonado con recuperar tu confianza y tu amor << Hoy en este dia tan especial no quiero ser solo un caballero con suenos rotos quiero ser el que cuide de ti te haga sonreir y te ame como mereces << Por eso hoy me arrodillo no con una espada sino con mi corazon en las manos para pedirte algo mas valioso que un reino<< Te gustaria ser mi princesa nuevamente y que volvamos a escribir juntos esta historia de amor << Con todo mi amor << Tu caballero eterno << Oscar";
var speed = 50;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {        
     if(txt1.charAt(i)=='<')
      document.getElementById("text1").innerHTML += '</br>'
    else if(txt1.charAt(i)=='>')
      document.getElementById("text1").innerHTML = ''
    else if(txt1.charAt(i)=='|')
      {
        $(".bg_heart").css("background-image","url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3poeHRxbGZkbWh0ZzE3dDlybWM3dnRwZ2VpeGRmcHJuaXExenptaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QrU69LU0LIuYJ9OQ4C/giphy.webp')");

      }
    else
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}