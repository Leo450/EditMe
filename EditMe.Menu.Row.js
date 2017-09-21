EditMe.Menu.Row = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Menu.Row.append = function(editMeMenuRow){

	var $container = $('<div class="action-container__row"></div>');

	var $removeRowButton = $('<button type="button" class="action__remove-row"><img src="' + editMeMenuRow.editMe.settings.iconDir + '/remove-row.svg" alt="Remove Row"></button>')
		.click(function(){
			editMeMenuRow.editMe.action.row.remove();
		});
	var $moveRowUpButton = $('<button type="button" class="action__move-row-up"><img src="' + editMeMenuRow.editMe.settings.iconDir + '/move-row-up.svg" alt="Move Row Up"></button>')
		.click(function(){
			editMeMenuRow.editMe.action.row.moveUp();
		});
	var $moveRowDownButton = $('<button type="button" class="action__move-row-down"><img src="' + editMeMenuRow.editMe.settings.iconDir + '/move-row-down.svg" alt="Move Row Down"></button>')
		.click(function(){
			editMeMenuRow.editMe.action.row.moveDown();
		});

	$container
		.append($removeRowButton)
		.append($moveRowUpButton)
		.append($moveRowDownButton);

	EditMe.Menu.preserveOnFocusin(editMeMenuRow, $container);

	editMeMenuRow.editMe.$element.before($container);

};
EditMe.Menu.Row.update = function(editMeMenuColumn){

	if(editMeMenuColumn.editMe.selection.selectedCell && editMeMenuColumn.editMe.selection.selectedCell.element.tagName === "TD"){

		$('.action__move-row-up').toggle(editMeMenuColumn.editMe.selection.selectedCell.rowIndex !== 0);
		$('.action__move-row-down').toggle(editMeMenuColumn.editMe.selection.selectedCell.rowIndex !== editMeMenuColumn.editMe.viewData.nbRow - 1);
		$('.action__remove-row').toggle(editMeMenuColumn.editMe.viewData.nbRow > 1);

		$('.action-container__row').show();

	}else{
		$('.action-container__row').hide();
	}

};