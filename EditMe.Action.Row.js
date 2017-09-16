EditMe.Action.Row = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Action.Row.prototype = {

	remove: function(rowIndex){

		if(rowIndex === undefined){
			rowIndex = (typeof this.editMe.selection.selectedCell.rowIndex === "number")? this.editMe.selection.selectedCell.rowIndex : null;
		}
		if(rowIndex === null){
			return false;
		}

		$('tbody tr:nth-child(' + (rowIndex + 1) + ')', this.editMe.element).remove();

		this.editMe.selection.unsetSelectedCell();
		this.editMe.updateView();

	},

	moveUp: function(rowIndex){

		if(rowIndex === undefined){
			rowIndex = (typeof this.editMe.selection.selectedCell.rowIndex === "number")? this.editMe.selection.selectedCell.rowIndex : null;
		}
		if(rowIndex === null){
			return false;
		}

		var $tr = $('tbody tr:nth-child(' + (rowIndex + 1) + ')', this.editMe.element);

		$tr.prev().insertAfter($tr);

		this.editMe.selection.refreshSelectedCell();
		this.editMe.updateView();

	},

	moveDown: function(rowIndex){

		if(rowIndex === undefined){
			rowIndex = (typeof this.editMe.selection.selectedCell.rowIndex === "number")? this.editMe.selection.selectedCell.rowIndex : null;
		}
		if(rowIndex === null){
			return false;
		}

		var $tr = $('tbody tr:nth-child(' + (rowIndex + 1) + ')', this.editMe.element);

		$tr.next().insertBefore($tr);

		this.editMe.selection.refreshSelectedCell();
		this.editMe.updateView();

	}

};