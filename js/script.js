
//still working on it, trying to use jQuery for this project


// gives focus to the first text field,when the page loads
$(function() {
  $("#name").focus();
});


//Text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
$( '#title' ).change(function() {
  let $jobRole = $(this).val();
  if($jobRole === 'other'){
    let otherTextField = "<input type='text' id='other-title' placeholder='Your Job Role'>";
    $('fieldset:first-of-type').append(otherTextField);
  }else {
    $('#other-title').remove();
  }
});
//displaing the color options that match the design selected in the "Design" menu.
$('#design').change(function(){
  let $themeValue = $(this).val();
  if($themeValue === 'Select Theme'){//hiding the color options if Select Theme has been selected.
    $('#color').hide();
  }
   else if($themeValue === 'js puns'){// showing the relevant colors for js puns , when js puns is selected.
      $('#color option').remove();
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
      $('#color').show();

    }
    else if ($themeValue === 'heart js') {// showing the relevant colors for heart js , when jheart js is selected.
      $('#color option').remove();
      let tomato = $('<option/>');
      tomato.attr({ 'value': 'tomato' }).text('Tomato');
      let steelblue = $('<option/>');
      steelblue.attr({ 'value': 'steelblue' }).text('Steel Blue');
      let dimgrey = $('<option/>');
      dimgrey.attr({ 'value': 'gold' }).text('Dimgrey');
      $('#color').append(tomato)
                 .append(steelblue)
                 .append(dimgrey);
      $('#color').show();
    }

  });

//As the user selects activities, a running total displays below the list of checkboxes.
let total = 0;
$('.activities input').change(function(){
  let $checkedBox = ($(this)[0].checked);//creating a variable to hold checked boxes.
  let $chekedBoxName = ($(this)[0].name);//creating a variable to hold checked boxes names.
  if ($checkedBox){
    if($chekedBoxName === "all"){
      total += 200;
    }else{
      total += 100;
    }
  }else if(!$checkedBox){
    if($chekedBoxName === "all"){
      total -= 200;
    }else{
      total -= 100;
    }
  }
  $('#total').remove();//removing any previous 'total cost' paragraphs
  let totalCost = $('<h3>');//creating a new h3 element
  totalCost.attr('id','total').text("Total:"+'$'+ total); //assigning an id and the total cost of selected checkboxes
  $('.activities').append(totalCost); //append the cost below the checkboxes

});

//making sure the user can not select overlapping activities.
$('.activities input').change(function(){
  let $checkedBox = ($(this)[0].checked);//creating a variable to hold checked boxes.
  let $chekedBoxName = ($(this)[0].name);//creating a variable to hold checked boxes names.
  let $activities = $('.activities input');//creating a variable to hold the array of activities.

//checking for overlapping activities and if there are any, making sure that the boxes for the ones overlapping are disbled.
  if ($chekedBoxName === 'js-libs' && $checkedBox) {
    disableCheckBox($activities[4]);
	} else if ($chekedBoxName === 'js-libs' && !$checkedBox) {
		enableCheckBox($activities[4]);

	} else if ($chekedBoxName=== 'node' && $checkedBox) {
		disableCheckBox($activities[2]);
	} else if ($chekedBoxName === 'node' && !$checkedBox) {
		enableCheckBox($activities[2]);

	} else if ($chekedBoxName === 'js-frameworks' && $checkedBox) {
		disableCheckBox($activities[3]);
	} else if ($chekedBoxName === 'js-frameworks' && !$checkedBox) {
		enableCheckBox($activities[3]);

	} else if ($chekedBoxName=== 'express' && $checkedBox) {
		disableCheckBox$(activities[1]);
	} else if ($chekedBoxName === 'express' && !$checkedBox) {
		enableCheckBox($activities[1]);
	}

});

//disable check box function
function disableCheckBox($activities){
  $activities.disabled = true;
};
//enable check box function
function enableCheckBox($activities){
  $activities.disabled = false;
};
