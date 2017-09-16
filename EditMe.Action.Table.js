EditMe.Action.Table = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Action.Table.prototype = {

	addRow: function(){

		var $tr = $('<tr></tr>');

		for(var i = 0; i < this.editMe.viewData.nbColumn; i++){
			$tr.append('<td></td>');
		}

		$('tbody', this.editMe.element).append($tr);

		this.editMe.updateView();

	},

	addColumn: function(){

		$('thead tr').append('<th></th>');
		$('tbody tr').append('<td></td>');

		this.editMe.updateView();

	}

};