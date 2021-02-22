//BUAT SEBUAH METHODE/FUNGTTION//

const handlesubmit = (event)=>{
    event.preventDefault()

    //tangkap nilai input dari user

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let address = document.getElementById('address').value
    let birthday = document.getElementById('birthday').value

    console.log(`
    username : ${username}
    email : ${email}
    phone :${phone}
    address:${address}
    birthday : ${birthday}
    age : ${2021 - birthday.split("-") [0] + "years old"}

    `)

    alert(`selamat datang\n${username} \nemail anda ${email}`)
}