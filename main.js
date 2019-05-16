// --- CHARACTER OBJECTS --- //
//var template = { role: "", name: "" }

// character objects
//Tanks
var ledin = { role: "Tank", name: "Ledin" }
var vargas = { role: "Tank", name: "Vargas" }
var aaron = { role: "Tank", name: "Aaron" }
var pierre = { role: "Tank", name: "Pierre" }
var grenier = { role: "Tank", name: "Grenier" }
//Supports
var bozel = { role: "Support", name: "Bozel" }
var hein = { role: "Support", name: "Hein" }
var bernhardt = { role: "Support", name: "Bernhardt" }
var matthew = { role: "Support", name: "Matthew" }
var diehardt = { role: "Support", name: "Diehardt" }
//Healers
var liana = { role: "Healer", name: "Liana" }
var tiaris = { role: "Healer", name: "Tiaris" }
var sophia = { role: "Healer", name: "Sophia" }
var anna = { role: "Healer", name: "Anna" }
var almeda = { role: "Healer", name: "Almeda"}
//DPS
var cherie = { role: "DPS", name: "Cherie" }
var chris = { role: "DPS", name: "Chris" }
var elwin = { role: "DPS", name: "Elwin" }
var lance = { role: "DPS", name: "Lance" }
var liffany = { role: "DPS", name: "Liffany" }

// filler character objects for this file
var Tank = { role: "Tank", name: "No Tank selected" }
var Healer = { role: "Healer", name: "No Healer selected" }
var Support = { role: "Support", name: "No Support selected" }
var DPS1 = { role: "DPS", name: "No DPS1 selected" }
var DPS2 = { role: "DPS", name: "No DPS2 selected" }


// --- LOGIC FOR GETTING INFO FROM WEBPAGE ---

var chosen = [];
function submitCharacters()
{
    var team = [Tank, Healer, Support, DPS1, DPS2];
    
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
        if(chosen[0].role === "Tank" && team[0] === Tank)
        { 
            team[0] = chosen[0]; 
        }
        if(chosen[0].role === "Healer" && team[1] === Healer)
        { 
            team[1] = chosen[0]; 
        }
        if(chosen[0].role === "Support" && team[2] === Support)
        { 
            team[2] = chosen[0]; 
        }
        if(chosen[0].role === "DPS" && team[3] === DPS1)
        { 
            team[3] = chosen[0]; 
        }
        if(chosen[0].role === "DPS" && team[4] === DPS2 && team[3].name != chosen[0].name)
        { 
            team[4] = chosen[0]; 
        } // ensures any chosen DPS's are not duplicated in both slots
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