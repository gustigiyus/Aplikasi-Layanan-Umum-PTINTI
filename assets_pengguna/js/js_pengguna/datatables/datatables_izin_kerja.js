"use strict";
var KTDatatablesExtensionButtons = function() {

	var initTable1 = function() {

		// begin first table
		var table = $('#tabel-izin-kerja').DataTable({
			"scrollX": true,
		});
	};

	return {

		//main function to initiate the module
		init: function() {
			initTable1();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesExtensionButtons.init();
});

  
  
  
  