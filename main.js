// --- CHARACTER OBJECTS --- //
//var template = { role: "", name: "" }

// character objects
//tanks
var ledin = { role: "tank", name: "Ledin" }
var vargas = { role: "tank", name: "Vargas" }
var aaron = { role: "tank", name: "Aaron" }
var pierre = { role: "tank", name: "Pierre" }
var grenier = { role: "tank", name: "Grenier" }
//supports
var bozel = { role: "support", name: "Bozel" }
var hein = { role: "support", name: "Hein" }
var bernhardt = { role: "support", name: "Bernhardt" }
var matthew = { role: "support", name: "Matthew" }
var diehardt = { role: "support", name: "Diehardt" }
//healers
var liana = { role: "healer", name: "Liana" }
var tiaris = { role: "healer", name: "Tiaris" }
var sophia = { role: "healer", name: "Sophia" }
var anna = { role: "healer", name: "Anna" }
var almeda = { role: "healer", name: "Almeda"}
//dps
var cherie = { role: "dps", name: "Cherie" }
var chris = { role: "dps", name: "Chris" }
var elwin = { role: "dps", name: "Elwin" }
var lance = { role: "dps", name: "Lance" }
var liffany = { role: "dps", name: "Liffany" }

// filler character objects for this file
var tank = { role: "tank", name: "empty" }
var healer = { role: "healer", name: "empty" }
var support = { role: "support", name: "empty" }
var dps1 = { role: "dps", name: "empty" }
var dps2 = { role: "dps", name: "empty" }


// --- LOGIC FOR GETTING INFO FROM WEBPAGE ---

var chosen = [];
function submitCharacters()
{
    var team = [tank, healer, support, dps1, dps2];
    
    /*
     * gets all checked characters and puts them into the chosen array
     */
    var checked = document.querySelectorAll("input[type=checkbox]:checked");
    for(var i = 0; i < checked.length ; i++)
    { chosen.push(eval(checked[i].value)); }

    /*
     * traverses the chosen array and populates the team array with 
     * appropriate character objects
     */
    while(chosen.length != 0)
    {
        if(chosen[0].role === "tank" && team[0] === tank)
        { 
            team[0] = chosen[0]; 
        }
        if(chosen[0].role === "healer" && team[1] === healer)
        { 
            team[1] = chosen[0]; 
        }
        if(chosen[0].role === "support" && team[2] === support)
        { 
            team[2] = chosen[0]; 
        }
        if(chosen[0].role === "dps" && team[3] === dps1)
        { 
            team[3] = chosen[0]; 
        }
        if(chosen[0].role === "dps" && team[4] === dps2 && team[3].name != chosen[0].name)
        { 
            team[4] = chosen[0]; 
        } // ensures any chosen dps's are not duplicated in both slots
        chosen.shift();
    }
    
    var result = "";
    for(var i = 0; i < 5; i++)
    { result +=  team[i].role + ": " + team[i].name +  "<br>"; } // readies the data of team to be added to the webpage
    document.getElementById("characters").innerHTML = result; // adds team to the webpage
} // end submitCharacters()

function clearAllCheckboxes() 
{
    var checked = document.querySelectorAll("input[type=checkbox]:checked");
    
    /*
     * unchecks all checkboxes
     */    
    for(var i = 0; i < checked.length; i++)
    {
        checked[i].checked = false;
    }
    
    document.getElementById("characters").innerHTML = ""; // removes any printed result
} // end clearAllCheckboxes()

document.querySelector(".navbar-toggler").addEventListener("click", function(){
    document.querySelector("#navbarSupportedContent").classList.toggle("show");
});

/*
 * toggles the content of the heading paragraph
 */
document.querySelector(".toggleContent").addEventListener("click", function(){
    var content = document.querySelector(".headingContent");
    
    if(content.style.display !== "none")
    {
        content.style.display = "none";
    } 
    else 
    {
        content.style.display = "block";
    }
});