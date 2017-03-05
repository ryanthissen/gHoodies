$(document).ready(function() {
  $('select').material_select();
});

$("#select-cohort").on('change', function() {
    console.log('select changed');
});
