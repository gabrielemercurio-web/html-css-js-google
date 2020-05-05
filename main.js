
// intercettare il click sulla classe .dropdown
$('#nav-right .material-icons').click(function() {

    // individuare la classe .dropdown
    var dropdown = $('.dropdown-hidden');

    // rimuovere la classe .dropdown-hidden
    // aggiungere la classe .dropdown-visible
    dropdown.toggleClass('dropdown-visible');
});
