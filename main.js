
$.getJSON("https://reqres.in/api/users", (response) => {
    const users = response.data; 

 
    users.forEach(user => {
        const userCard = `
            <div class="col-md-4 col-lg-3 d-flex justify-content-center">
                <div class="card custom-card">
                    <img src="${user.avatar}" class="small-avatar" alt="${user.first_name}">
                    <div class="card-body">
                        <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                        <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                        <p style="position: relative;"><strong>${user.id}</strong></p>
                    </div>
                </div>
            </div>
        `;
        $("#user-cards").append(userCard); 
    });
});



 