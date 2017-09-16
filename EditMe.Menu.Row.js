EditMe.Menu.Row = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Menu.Row.append = function(editMeMenuRow){

	var $container = $('<div class="action-container__row"></div>');

	var $removeRowButton = $('<button class="action__remove-row">Remove Row</button>')
		.click(function(){
			editMeMenuRow.editMe.action.row.remove();
		});
	var $moveRowUpButton = $('<button class="action__move-row-up">Move Row Up</button>')
		.click(function(){
			editMeMenuRow.editMe.action.row.moveUp();
		});
	var $moveRowDownButton = $('<button class="action__move-row-down">Move Row Down</button>')
		.click(function(){
			editMeMenuRow.editMe.action.row.moveDown();
		});

	$container
		.append($removeRowButton)
		.append($moveRowUpButton)
		.append($moveRowDownButton);

	editMeMenuRow.editMe.$element.before($container);

};
EditMe.Menu.Row.update = function(editMeMenuColumn){

	if(editMeMenuColumn.editMe.selection.selectedCell){

		$('.action__move-row-up').toggle(editMeMenuColumn.editMe.selection.selectedCell.rowIndex !== 0);
		$('.action__move-row-down').toggle(editMeMenuColumn.editMe.selection.selectedCell.rowIndex !== editMeMenuColumn.editMe.viewData.nbRow - 1);
		$('.action__remove-row').toggle(editMeMenuColumn.editMe.viewData.nbRow > 1);

		$('.action-container__row').show();

	}else{
		$('.action-container__row').hide();
	}

};