EditMe.Action = function(editMe){

	"use strict";

	this.table = new EditMe.Action.Table(editMe);
	this.cell = new EditMe.Action.Cell(editMe);
	this.column = new EditMe.Action.Column(editMe);
	this.row = new EditMe.Action.Row(editMe);

};