const searchInput =
    document.getElementById("searchInput");

const suggestionsBox =
    document.getElementById("suggestions");

const data = [
    "Apple",
    "Amazon",
    "Adobe",
    "Android",
    "Angular",
    "Bootstrap",
    "CSS",
    "ChatGPT",
    "Docker",
    "Express",
    "Facebook",
    "Firebase",
    "Git",
    "GitHub",
    "Google",
    "Java",
    "JavaScript",
    "MongoDB",
    "NodeJS",
    "NextJS",
    "Python",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "VueJS"
];

let filteredResults = [];
let selectedIndex = -1;

/*
    Render Suggestions
*/
function renderSuggestions(items){

    suggestionsBox.innerHTML = "";

    if(items.length === 0){
        suggestionsBox.style.display = "none";
        return;
    }

    items.forEach((item,index)=>{

        const li =
            document.createElement("li");

        li.textContent = item;

        if(index === selectedIndex){
            li.classList.add("active");
        }

        li.addEventListener("click",()=>{
            selectSuggestion(item);
        });

        suggestionsBox.appendChild(li);
    });

    suggestionsBox.style.display = "block";
}

/*
    Select Suggestion
*/
function selectSuggestion(value){

    searchInput.value = value;

    suggestionsBox.style.display = "none";

    selectedIndex = -1;
}

/*
    Input Event
*/
searchInput.addEventListener("input",()=>{

    const query =
        searchInput.value.toLowerCase().trim();

    selectedIndex = -1;

    if(!query){

        suggestionsBox.style.display = "none";
        return;
    }

    filteredResults = data.filter(item =>
        item.toLowerCase().includes(query)
    );

    renderSuggestions(filteredResults);
});

/*
    Keyboard Navigation
*/
searchInput.addEventListener("keydown",(e)=>{

    if(!filteredResults.length) return;

    // Down Arrow
    if(e.key === "ArrowDown"){

        e.preventDefault();

        selectedIndex++;

        if(selectedIndex >= filteredResults.length){
            selectedIndex = 0;
        }

        renderSuggestions(filteredResults);
    }

    // Up Arrow
    else if(e.key === "ArrowUp"){

        e.preventDefault();

        selectedIndex--;

        if(selectedIndex < 0){
            selectedIndex =
                filteredResults.length - 1;
        }

        renderSuggestions(filteredResults);
    }

    // Enter
    else if(e.key === "Enter"){

        e.preventDefault();

        if(selectedIndex > -1){

            selectSuggestion(
                filteredResults[selectedIndex]
            );
        }
    }
});

/*
    Close Dropdown on Outside Click
*/
document.addEventListener("click",(e)=>{

    if(
        !searchInput.contains(e.target) &&
        !suggestionsBox.contains(e.target)
    ){
        suggestionsBox.style.display = "none";
    }
});
