function saveData()
{
    let name,pswd;
    name=document.getElementById("name").value;
    pswd=document.getElementById("pswd").value;
     
    alert(name || "El usuario no existe");
    localStorage.setItem('name',name);
    localStorage.setItem('pswd',pswd);
    window.location.href="/pages/home.html"
}