let isSamePass = false;
function passwordValidCheckHandler(){
    const cpass =document.querySelector('.cpassword').value
    const pass =document.querySelector('.password').value
    if(cpass == pass){
        const chkpass = document.querySelector('.chkpass')
        chkpass.innerHTML = 'password confirm β:'
        isSamePass = true;
    }else{
        const chkpass = document.querySelector('.chkpass')
        chkpass.innerHTML = 'password confirm π«:'
        isSamePass = false;
    }
}
document.querySelector('.password').addEventListener('input',passwordValidCheckHandler)
document.querySelector('.cpassword').addEventListener('input',passwordValidCheckHandler)
document.querySelector('.join_send').addEventListener('click',()=>{
    const name = document.querySelector('.name').value;
    const userid = document.querySelector('.userid').value;
    const password = document.querySelector('.password').value;
    const email = document.querySelector('.email').value;
    if(name != "" && userid != "" && password != "" && email != ""){
        if(isSamePass){
            fetch("http://localhost:8000/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },body:JSON.stringify({
                    'name':name,
                    'userid':userid,
                    'password':password,
                    'email':email
                })
                })
                .then((response) => response.json())
                .then((data) =>{
                    if(data.msg == "succeed"){
                        alert("κ°μμ μλ£νμμ΅λλ€.");
                        location.href="./login.htm"
                    }else{
                        alert("μ΄λ―Έ μ‘΄μ¬νλ μμ΄λμλλ€..");
                    }
                });
        }else{
        alert('μλ ₯νμ  λ λΉλ°λ²νΈκ° λ€λ¦λλ€.');
        }
    }else{
        alert('λΉμΉΈμ΄ μμ΄μΌν©λλ€..');
    }
})