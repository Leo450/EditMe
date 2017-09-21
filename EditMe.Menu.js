EditMe.Menu = function(editMe){

	"use strict";

	this.editMe = editMe;

	this.table = new EditMe.Menu.Table(editMe);
	this.cell = new EditMe.Menu.Cell(editMe);
	this.column = new EditMe.Menu.Column(editMe);
	this.row = new EditMe.Menu.Row(editMe);

	this.create();

};
EditMe.Menu.prototype = {

	create: function(){

		EditMe.Menu.Table.append(this.table);
		EditMe.Menu.Cell.append(this.cell);
		EditMe.Menu.Column.append(this.column);
		EditMe.Menu.Row.append(this.row);

	},

	update: function(){

		EditMe.Menu.Cell.update(this.cell);
		EditMe.Menu.Column.update(this.cell);
		EditMe.Menu.Row.update(this.cell);

	}

};
EditMe.Menu.preserveOnFocusin = function(editMeMenuChild, menuContainer){

	$('> *', menuContainer)
		.focusin(function(){
			editMeMenuChild.editMe.selection.preserveSelectedCell();
		});

};
EditMe.Menu.unsetOnFocusout = function(editMeMenuChild, menuContainer){

	$('> *', menuContainer)
		.focusout(function(){
			editMeMenuChild.editMe.selection.unsetSelectedCell();
			editMeMenuChild.editMe.menu.update();
		});

};