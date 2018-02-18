
// gives focus to the first text field,when the page loads
$(function() {
  $("#name").focus();
});


//Text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
$( '#title' ).change(function() {
  if($(this).val() === 'other'){
    let otherTextField = "<input type='text' id='other-title' placeholder='Your Job Role'>";
    $('fieldset:first-of-type').append(otherTextField);
  }else {
    $('#other-title').remove();
  }
});

$('#design').change(function(){

  if($(this).val() === 'select theme'){
    $('#color').hide();
  }
   else if($(this).val() === 'js puns'){
      $('#color option').hide();
      let selectElement = $('<select/>');
      selectElement.attr('id','color');
      let cornflowerblue = $('<option/>');
      cornflowerblue.attr({ 'value': 'cornflowerblue' }).text('Cornflower Blue');
      let darkslategrey = $('<option/>');
      darkslategrey.attr({ 'value': 'darkslategrey' }).text('Dark Slate Grey');
      let gold = $('<option/>');
      gold.attr({ 'value': 'gold' }).text('Gold');

      $('#color').append(cornflowerblue)
                 .append(darkslategrey)
                 .append(gold);

    }
    else if ($(this).val() === 'heart js') {
      $('#color option').hide();
      let tomato = $('<option/>');
      tomato.attr({ 'value': 'tomato' }).text('Tomato');
      let steelblue = $('<option/>');
      steelblue.attr({ 'value': 'steelblue' }).text('Steel Blue');
      let dimgrey = $('<option/>');
      dimgrey.attr({ 'value': 'gold' }).text('Dimgrey');
      $('#color').append(tomato)
                 .append(steelblue)
                 .append(dimgrey);
    }

  });
