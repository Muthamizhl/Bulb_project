function change()
{
    var img =document.getElementById("bulb");

if(img.src.match("on"))
{
  img.src="./off.jpg";
}
else
{
   img.src="./on.jpg";
}
}