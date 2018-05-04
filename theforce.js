//waits until page is loaded first
$(document).ready(function(){


//The Force has taken over the background color of the selection box, making its presence felt
    $("select").css("background-color", "#e4d260");

//When the Sith approaches, the players turn their colors.    
    $("select").hover(function(){
        $(this).css("color", "#980707");
        $(this).css("background-color", "#0000ff4d");
    });
    
// I wish I could take credit for this next bit of code, but I cant.  This was adopted from
//@Sebam2k4, who cracked the problem with the check box class ID's that keep changing.
//applying his own ID to the parent, allowed the child elements to fillow the parent styles.

    
    const checkboxHolders = document.querySelectorAll(".checkboxholder");
    for (let i = 0; i < checkboxHolders.length; i++) {
    checkboxHolders[i].id = `theForce-${i}`;
  }

// My own ideas were to change the ID the $('input.hardCheckbox').attr('id', 'myForce').  
// This let me specify the ID for fomating in CSS, but wouldn't let me specify the individual input check boxes.
// In my attempt to do this I used $('input.hardCheckbox').get(0); $('input.hardCheckbox').get(1); $('input.hardCheckbox').get(2);
// The problem was i couldn't write a function to use this selection to create a unique ID for $('input.hardCheckbox').  And then 
// the const checkboxHolders function was posted, which changed everything.

});

