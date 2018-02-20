
//still working on it, trying to use jQuery for this project

//BASIC INFO
// gives focus to the first text field,when the page loads
$(function() {
  $("#name").focus();
});
//hiding the 'other job role' text field(I created it in the html file, in case of js being disabled the text field will still show up)
$('#other-title').hide()
//Text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
$( '#title' ).change(function() {
  let $jobRole = $(this).val();
  if($jobRole === 'other'){
    $('#other-title').show()
  }else {
    $('#other-title').hide();
  }
});

//T-SHIRT INFO
//displaing the color options that match the design selected in the "Design" menu.
$('#design').change(function(){
  let $themeValue = $(this).val();
  // creating variables to hold the colors
  let $cornflowerblue = $("#color option[value='cornflowerblue']");
  let $darkslategrey = $("#color option[value='darkslategrey']");
  let $gold = $("#color option[value='gold']");
  let $tomato =  $("#color option[value='tomato']");
  let $steelblue = $("#color option[value='steelblue']");
  let $dimgrey = $("#color option[value='dimgrey']");

  if($themeValue === 'Select Theme'){
     //showing all the colors when 'Select Theme' is selected
      $cornflowerblue.prop("selected",true);
      $cornflowerblue.show();
      $darkslategrey.show();
      $gold.show();

      $tomato.show();
      $steelblue.show();
      $dimgrey.show();

    } else if($themeValue === 'js puns'){
      // showing the relevant colors for js puns , when js puns is selected, hiding the rest
        $cornflowerblue.prop("selected",true); //cornflowerblue color is selected by default
        $cornflowerblue.show();
        $darkslategrey.show();
        $gold.show();

        $tomato.hide();
        $steelblue.hide();
        $dimgrey.hide();

    } else if ($themeValue === 'heart js') {
      // showing the relevant colors for heart js , when jheart js is selected, hiding the rest
         $tomato.prop("selected",true); // tomato color is selected by default
         $cornflowerblue.hide();
         $darkslategrey.hide();
         $gold.hide();

         $tomato.show();
         $steelblue.show();
         $dimgrey.show();

    }

  });

//REGISTER FOR ACTIVITIES

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


//PAYMENT INFO
//creating variables
let $creditCard = $("#payment option[value='credit card']");
let $creditCardP = $("#credit-card");
let $payPalP = $('div p:first');
let $bitCoinP = $('div p:last');
//selecting credit card payment as default
$creditCard.prop("selected",true);
//hiding bitcoin and PayPal texts
$payPalP.hide();
$bitCoinP.hide();

//displaing the relevant information acording to the payment method option
$('#payment').change(function(){
  $selectedMethod = $(this).val();//creating a variable to hold the value of the selected payment method

  if($selectedMethod === 'select_method'){
    $creditCardP.show();
    $payPalP.hide();
    $bitCoinP.hide();

  } else if($selectedMethod === 'credit card'){
      $creditCardP.show();
      $payPalP.hide();
      $bitCoinP.hide();

  } else if($selectedMethod === 'paypal'){
      $payPalP.show();
      $bitCoinP.hide()
      $creditCardP.hide();

  } else{
      $bitCoinP.show();
      $creditCardP.hide();
      $payPalP.hide();
  }

});
