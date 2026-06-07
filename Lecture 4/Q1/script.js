const userContainer =
    document.getElementById("userContainer");

const loader =
    document.getElementById("loader");

const error =
    document.getElementById("error");

async function fetchUsers() {

    try {

        loader.style.display = "block";

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(
                "Failed to fetch users"
            );
        }

        const users = await response.json();

        renderUsers(users);

    }
    catch(err) {

        error.textContent =
            "Error: " + err.message;
    }
    finally {

        loader.style.display = "none";
    }
}

function renderUsers(users) {

    userContainer.innerHTML = "";

    users.forEach(user => {

        const card =
            document.createElement("div");

        card.classList.add("user-card");

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
        `;

        userContainer.appendChild(card);
    });
}

fetchUsers();
