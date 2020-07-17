let message =  "sucessfull";
let error = "erroe";


$(function() {
    $('form').submit(function(e) {
  
      //prevent default form submission
      e.preventDefault();
  
     //ajax form submission
        $.ajax({
            type: 'POST',
            url: 'form.php',
            data: $(this).serialize(),
            success: (message) => {
             // add an action to be carried out when submission is successful
              modal.style.display = "block";
              $("#img01").attr({src:'./assets/Pop up.png'});
              
            },
            // add an action to be carried out when submission is successful
            error: (error) => {
              alert(`${error}`)
              modal.style.display = "block";
              $("#img01").attr({src:'./assets/Pop up (1).png'});
            }
        })
    }); 
  })

  