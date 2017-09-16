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

	$('> *', $container)
		.focusin(function(){
			editMeMenuCell.editMe.selection.preserveSelectedCell();
		})
		.focusout(function(){
			editMeMenuCell.editMe.selection.unsetSelectedCell();
			editMeMenuCell.editMe.menu.update();
		});

	editMeMenuCell.editMe.$element.before($container);

};
EditMe.Menu.Cell.update = function(editMeMenuCell){

	var show = !!editMeMenuCell.editMe.selection.selectedCell;

	if(show){

		var color = "none";
		var rgb = $(editMeMenuCell.editMe.selection.selectedCell.element).css("background-color");
		var rgbMatch = rgb.match(/\(([0-9 ,]+)\)/);
		if(rgbMatch.length === 2){
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

		var $selectedOption = $('.action-container__cell .action__set-color option[value="' + color.toLowerCase() + '"], .action-container__cell .action__set-color option[value="' + color.toUpperCase() + '"]');
		if(!$selectedOption.length){
			$selectedOption = $('.action-container__cell .action__set-color option[value="none"]');
		}

		$selectedOption.prop("selected", true);

	}

	$('.action-container__cell').toggle(show);

};