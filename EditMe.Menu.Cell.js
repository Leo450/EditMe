EditMe.Menu.Cell = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Menu.Cell.append = function(editMeMenuCell){

	var $container = $('<div class="action-container__cell"></div>');

	var $selectSetColor = $('<select class="action__set-color"></select>')
		.change(function(){
			editMeMenuCell.editMe.action.cell.setColor($(this).val());
		});

	$selectSetColor.append('<option value="none">None</option>');
	for(var i = 0; i < editMeMenuCell.editMe.settings.colors.length; i++){
		var color = editMeMenuCell.editMe.settings.colors[i];
		$selectSetColor.append('<option value="' + color.hex + '">' + color.name + '</option>');
	}

	$container
		.append($selectSetColor);

	if(editMeMenuCell.editMe.settings.select2){
		$selectSetColor.select2();
	}

	EditMe.Menu.preserveOnFocusin(editMeMenuCell, $container);
	//EditMe.Menu.unsetOnFocusout(editMeMenuCell, $container);

	editMeMenuCell.editMe.$element.before($container);

};
EditMe.Menu.Cell.update = function(editMeMenuCell){

	var show = !!editMeMenuCell.editMe.selection.selectedCell && editMeMenuCell.editMe.selection.selectedCell.element.tagName === "TD";

	if(show){

		var color = "none";
		var rgb = editMeMenuCell.editMe.selection.selectedCell.element.style.backgroundColor;
		var rgbMatch = rgb.match(/\(([0-9 ,]+)\)/);
		if(rgb && rgbMatch.length === 2){
			var rgbArr = rgbMatch[1].split(",");
			if(rgbArr.length >= 3){
				var r = parseInt(rgbArr[0].trim()).toString(16);
				var g = parseInt(rgbArr[1].trim()).toString(16);
				var b = parseInt(rgbArr[2].trim()).toString(16);
				r = (r.length === 1)? "0" + r : r;
				g = (g.length === 1)? "0" + g : g;
				b = (b.length === 1)? "0" + b : b;
				color = "#" + r + g + b;
			}
		}

		var $select = $('.action-container__cell .action__set-color', editMeMenuCell.editMe.$element.parent());
		var $selectedOption = $('option[value="' + color.toLowerCase() + '"], option[value="' + color.toUpperCase() + '"]', $select);

		$selectedOption.prop("selected", true);

		if(editMeMenuCell.editMe.settings.select2){
			$select.trigger("change");
		}

	}

	$('.action-container__cell').toggle(show);

};