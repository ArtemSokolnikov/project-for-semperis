<!-- Comments on the work of the program -->

<!-- localStorage contains two objects:
    first object (array 'type') - contains the values of the basic and advanced modes to run of the program
    second object ('state') - contains values of all fields -->

<!-- When restarting the program, it is randomly determined which mode of user (basic or advanced) will be displayed (Back end emulation) -->
<!-- For quick access to user modes, added two buttons to Footer ('Basic' and 'Advanced') -->

<!-- All field values are stored in the 'state' object (in localStorage).
These values can be replaced with new ones (the 'Save' button) or reset to default (the 'Discard' button).
When restarting, the new values are displayed on the user's page.  -->

<!-- Button 'Discard' - the strict behavior of the button is not described at the task, so when you click on it, all values become default values. 
If necessary, it is possible to make an implementation when the value from the last save is returned -->