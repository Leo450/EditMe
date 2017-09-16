EditMe.Menu.Table = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Menu.Table.append = function(editMeMenuTable){

	var $container = $('<div class="action-container__table"></div>');

	var $addRowButton = $('<button class="action__add-row">Add Row</button>')
		.click(function(){
			editMeMenuTable.editMe.action.table.addRow();
		});
	var $addColumnButton = $('<button class="action__add-column">Add Column</button>')
		.click(function(){
			editMeMenuTable.editMe.action.table.addColumn();
		});

	$container
		.append($addRowButton)
		.append($addColumnButton);

	editMeMenuTable.editMe.$element.before($container);

};