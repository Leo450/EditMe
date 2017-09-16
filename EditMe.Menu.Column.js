EditMe.Menu.Column = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Menu.Column.append = function(editMeMenuColumn){

	var $container = $('<div class="action-container__column"></div>');

	var $removeColumnButton = $('<button class="action__remove-column">Remove Column</button>')
		.click(function(){
			editMeMenuColumn.editMe.action.column.remove();
		});
	var $moveColumnLeftButton = $('<button class="action__move-column-left">Move Column Left</button>')
		.click(function(){
			editMeMenuColumn.editMe.action.column.moveLeft();
		});
	var $moveColumnRightButton = $('<button class="action__move-column-right">Move Column Right</button>')
		.click(function(){
			editMeMenuColumn.editMe.action.column.moveRight();
		});

	$container
		.append($removeColumnButton)
		.append($moveColumnLeftButton)
		.append($moveColumnRightButton);

	editMeMenuColumn.editMe.$element.before($container);

};
EditMe.Menu.Column.update = function(editMeMenuColumn){

	if(editMeMenuColumn.editMe.selection.selectedCell){

		$('.action__move-column-left').toggle(editMeMenuColumn.editMe.selection.selectedCell.columnIndex !== 0);
		$('.action__move-column-right').toggle(editMeMenuColumn.editMe.selection.selectedCell.columnIndex !== editMeMenuColumn.editMe.viewData.nbColumn - 1);
		$('.action__remove-column').toggle(editMeMenuColumn.editMe.viewData.nbColumn > 1);

		$('.action-container__column').show();

	}else{
		$('.action-container__column').hide();
	}

};