const body = document.querySelector('body')
const p = document.createElement('p')
body.append(p)

function submitData(userName, userEmail) {
    const formData = {
        name: userName,
        email: userEmail,
    }

    const postUser = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(formData),
    }
    
    return fetch('http://localhost:3000/users', postUser)
        .then(response => response.json())
        .then(data => {
            const p = document.createElement('p')
            body.append(p)
            p.textContent = data.id})
        .catch(error => p.textContent = error.message)
    
}