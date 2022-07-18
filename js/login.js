function saveData()
{
    let name,pswd;
    name=document.getElementById("name").value;
    pswd=document.getElementById("pswd").value;
    console.log(name)
    alert("Login Pass");
    localStorage.setItem('name',name);
    localStorage.setItem('pswd',pswd);
    window.location.href="/pages/home.html"
}