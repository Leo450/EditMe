EditMe.Menu.Table = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Menu.Table.append = function(editMeMenuTable){

	var $container = $('<div class="action-container__table"></div>');

	var $addRowButton = $('<button type="button" class="action__add-row"><img src="' + editMeMenuTable.editMe.settings.iconDir + '/add-row.svg" alt="Add Row"></button>')
		.click(function(){
			editMeMenuTable.editMe.action.table.addRow();
		});
	var $addColumnButton = $('<button type="button" class="action__add-column"><img src="' + editMeMenuTable.editMe.settings.iconDir + '/add-column.svg" alt="Add Column"></button>')
		.click(function(){
			editMeMenuTable.editMe.action.table.addColumn();
		});

	$container
		.append($addRowButton)
		.append($addColumnButton);

	editMeMenuTable.editMe.$element.before($container);

};