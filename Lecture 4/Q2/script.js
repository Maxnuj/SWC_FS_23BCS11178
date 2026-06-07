const fetchBtn = document.getElementById("fetchBtn");
const loader = document.getElementById("loader");
const result = document.getElementById("result");

const API_URL =
    "https://jsonplaceholder.typicode.com/users/1";

/*
    Generic Retry Function
*/
async function fetchWithRetry(
    url,
    maxRetries = 3
){

    let attempt = 0;

    while(attempt < maxRetries){

        try{

            console.log(
                `Attempt ${attempt + 1}`
            );

            const response =
                await fetch(url);

            if(!response.ok){
                throw new Error(
                    `HTTP Error: ${response.status}`
                );
            }

            return await response.json();
        }
        catch(error){

            attempt++;

            if(attempt === maxRetries){
                throw error;
            }

            console.log(
                `Retrying... (${attempt}/${maxRetries})`
            );

            await new Promise(resolve =>
                setTimeout(resolve, 1000)
            );
        }
    }
}

/*
    Fetch Data
*/
async function getData(){

    result.innerHTML = "";
    loader.style.display = "block";

    try{

        const data =
            await fetchWithRetry(API_URL, 3);

        result.innerHTML = `
            <div class="success">
                <h3>${data.name}</h3>
                <p>${data.email}</p>
            </div>
        `;
    }
    catch(error){

        result.innerHTML = `
            <div class="error">
                Failed after 3 retries.
                Please try again later.
            </div>
        `;
    }
    finally{

        loader.style.display = "none";
    }
}

fetchBtn.addEventListener(
    "click",
    getData
);
