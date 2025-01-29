var ok = confirm("Do you agree to share your personal information with this site?");

if (ok)
{
    var Nickname = "Tine";
    var Height = "62";
    var Weight = "45";

    var feet = Math.floor(Height/12);
    var inch = Height%12;
    var lbs = Weight*2.205;

	console.log("Name: " + Nickname + "\nHeight: " + feet + "'" + inch + "\nWeight: " + lbs + " lbs");
}
else 
{
	console.log("“User does not wish to share his/her information.”");
}
