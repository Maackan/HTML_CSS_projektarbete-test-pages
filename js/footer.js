
var footer = document.querySelector('.in-cont');

footer.innerHTML = 
"<div id=\"links\"><a href=\"/contacts/index.html\">Contact</a> | <a href=\"/contributors/index.html\">About</a></div>" +
"<p>Copyright &copy; 2022 - Design:NINJA & Girl Talk </p>" +
"<div id=\"icons\">" +
"<a class=\"fb\" href=\"#\"><i class=\"fab fa-facebook fa-2x\"></i></a>" +
"<a class=\"tw\" href=\"#\"><i class=\"fab fa-twitter fa-2x\"></i></a>" +
"<a class=\"ggl\" href=\"#\"><i class=\"fab fa-google-plus fa-2x\"></i></a>" +
"<a class=\"linkd\" href=\"#\"><i class=\"fab fa-linkedin-in fa-2x\"></i> </a>" +
"</div>";


// Hej Björn vad roligt att du har hittat mitt "asp.net light version" script!
//
// Jag kom på idén att man kan ha ett JavaScript som genererar html kod för att 
// slippa copy-pastea samma komponenter flera gånger på olika sidor.
//
// i scriptet '/js/navmenu.js' ligger en function som lägger till detta script i <head> så fort sidan har laddat
// sedan hittar detta script classen '.in-cont' och ändrar inehållet.

// Nästa steg blir att kunna ladda in en .html fil eller liknande format
// och konvertera inehållet till en string som sedan läggs in på rätt ställe
// för att smidigt kunna göra globala förändringar på hela sidan ifrån ett och samma dokument/fil