let nav = window.navigator;



let os = "Cannot Identify";

if (nav.userAgent.match(/Windows NT 10.0/))
{
  os = "MS Windows 10";
} 
else if (nav.userAgent.match(/Windows/))
{
  os = "MS Windows";
} 
else if (nav.userAgent.match(/Android 10/))
{
  os = "Android 10";
} 
else if (nav.userAgent.match(/Android/))
{
  os = "Android";
} 
else if (nav.userAgent.match(/Fedora/))
{
  os = "Fedora Linux";
} 
else if (nav.userAgent.match(/Linux/))
{
  os = "Linux";
} 
else if (nav.userAgent.match(/Macintosh/))
{
  os = "Mac OS";
}
else if (nav.userAgent.match(/PlayStation 4/))
{
  os = "PS4";
}
else if (nav.userAgent.match(/PlayStation/))
{
  os = "Playstation";
}



let browser = nav.appName;

if (nav.userAgent.match(/Opera|OPR\//)) 
{
  browser = "Opera";
} 
else if (nav.userAgent.match(/Edg\//) || nav.userAgent.match(/Edge\//)) 
{
  browser = "Microsoft Edge";
} 
else if (nav.userAgent.match(/Firefox\//)) 
{
  browser = "Mozilla Firefox";
} 
else if (nav.userAgent.match(/YaBrowser\//)) 
{
  browser = "Yandex";
} 
else if (nav.userAgent.match(/SamsungBrowser\//)) 
{
  browser = "Samsung Internet";
} 
else if (nav.userAgent.match(/Chrome\//)) 
{
  browser = "Google Chrome";
} 
else if (nav.userAgent.match(/Safari\//) && (os != "PlayStation") && (os != "PS4")) 
{
  browser = "Safari";
} 
else if (nav.userAgent.match(/Trident\//)) 
{
  browser = "Internet Explorer";
}

// if none of them or too old version probably prints Netscape
//window.alert("Current Browser: " + browser); 
console.log("Current Browser: " + browser);

window.alert("Current Browser: " + browser + "\n" + "Operating System: " + os); 
console.log("Operating System: " + os);
