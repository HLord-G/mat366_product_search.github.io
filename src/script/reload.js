window.addEventListener("beforeunload", function (e) {
    // Your logic for displaying a confirmation message
    var confirmationMessage = "Are you sure you want to leave? Your changes may not be saved.";

    // Set the confirmation message in a way that avoids triggering the browser warning
    e.returnValue = confirmationMessage;

    return confirmationMessage;
});
