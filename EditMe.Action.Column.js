EditMe.Action.Column = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Action.Column.prototype = {

	remove: function(columnIndex){

		if(columnIndex === undefined){
			columnIndex = (typeof this.editMe.selection.selectedCell.columnIndex === "number")? this.editMe.selection.selectedCell.columnIndex : null;
		}
		if(columnIndex === null){
			return false;
		}

		$('tbody tr td:nth-child(' + (columnIndex + 1) + '), thead tr th:nth-child(' + (columnIndex + 1) + ')', this.editMe.element).remove();

		this.editMe.selection.unsetSelectedCell();
		this.editMe.updateView();

	},

	moveLeft: function(columnIndex){

		if(columnIndex === undefined){
			columnIndex = (typeof this.editMe.selection.selectedCell.columnIndex === "number")? this.editMe.selection.selectedCell.columnIndex : null;
		}
		if(columnIndex === null){
			return false;
		}

		$('tbody tr td:nth-child(' + (columnIndex + 1) + '), thead tr th:nth-child(' + (columnIndex + 1) + ')', this.editMe.element).each(function(){
			$(this).prev().insertAfter($(this));
		});

		this.editMe.selection.refreshSelectedCell();
		this.editMe.updateView();

	},

	moveRight: function(columnIndex){

		if(columnIndex === undefined){
			columnIndex = (typeof this.editMe.selection.selectedCell.columnIndex === "number")? this.editMe.selection.selectedCell.columnIndex : null;
		}
		if(columnIndex === null){
			return false;
		}

		$('tbody tr td:nth-child(' + (columnIndex + 1) + '), thead tr th:nth-child(' + (columnIndex + 1) + ')', this.editMe.element).each(function(){
			$(this).next().insertBefore($(this));
		});

		this.editMe.selection.refreshSelectedCell();
		this.editMe.updateView();

	}

};