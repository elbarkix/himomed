$(document).ready(function() {
    var ongoingRequest = null;
    $("#form2").submit(function(event){
        var first_name = $("#Nom").val();
        var last_name = $("#Ville").val();
        var phone_number = $("#Tele").val();
        if (first_name !== "" && last_name !== "" && phone_number !== "") {
            // Abort any pending request
            if (ongoingRequest) {
                ongoingRequest.abort();
            }
            // setup some local variables
            var $form = $(event.target);
        
            // Let's select and cache all the fields
            var $inputs = $form.find("input, select, button, textarea");
        
            // Serialize the data in the form
            var serializedData = $form.serialize();
        
            // Let's disable the inputs for the duration of the Ajax request.
            // Note: we disable elements AFTER the form data has been serialized.
            // Disabled form elements will not be serialized.
            $inputs.prop("disabled", true);
        
            // Fire off the request to /form.php
            ongoingRequest = $.ajax({
                url: "https://www.sihatu.shop/go/?order=53h5lY3AVtIYQzFBkZG5GIWgk1bWEX",
                type: "post",
                data: serializedData
            });
        
            // Callback handler that will be called on success
            ongoingRequest.done(function (response, textStatus, jqXHR){
                // Log a message to the console
                console.log("Hooray, it worked!");
                console.log(response);
                console.log(textStatus);
                console.log(jqXHR);
            });
        
            // Callback handler that will be called on failure
            ongoingRequest.fail(function (jqXHR, textStatus, errorThrown){
                // Log the error to the console
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown
                );
            });
        
            // Callback handler that will be called regardless
            // if the request failed or succeeded
            ongoingRequest.always(function () {
                // Reenable the inputs
                $inputs.prop("disabled", false);
                console.log("It's running");
                window.location.href = 'success.html';
            });
        
            // Prevent default posting of form
            event.preventDefault();
        }
    });
});