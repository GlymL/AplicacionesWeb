const form = document.querySelector("#login");

form.onsubmit = async e => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#password").value;

    try {
        const response = await fetch("/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { email: email, password : pass } )
        });

        const json = await response.json();

        if(response.ok){
            console.log(json)
            window.location.href = json.redirect;
            return;
        }

        console.error("Error:", json.error);
    }catch (error){
        console.error(error.message);
    }
    

}