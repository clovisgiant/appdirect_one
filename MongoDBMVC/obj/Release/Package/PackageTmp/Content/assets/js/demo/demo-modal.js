/*** -----------------------------------------------------------------------------------------------

	ADMIN TEMPLATE | Boo Admin Template
	----------------------------------------

	JS - Demo Modal
	
	-------------------------------------------------------------------------------------------------------------------------------- ***/

// MODAL DEMO for MODALMANAGER
// ------------------------------------------------------------------------------------------------ * -->
	//$.fn.modal.defaults.spinner = '<img class="loading-spinner" src="img/ajax-loader.gif" />';
	//$.fn.modalmanager.defaults.spinner = '<img class="loading-spinner" src="img/ajax-loader.gif" />';
	
	$.fn.modalmanager.defaults = {
		backdrop: true,
		spinner: '<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>'
	}
	
	// DYNAMIC 
	// ----------------------------------------- * -->
	$('#dynamicModal').click(function () {
			var tmpl = [
			// tabindex is required for focus
			'<div class="modal hide fade" tabindex="-1">',
				'<div class="modal-header">',
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
					'<h4>Modal header</h4>',
				'</div>',
				'<div class="modal-body">',
					'<p>Test - this window is generated from a template</p>',
				'</div>',
				'<div class="modal-footer">',
					'<a href="#" data-dismiss="modal" class="btn btn-boo">Close</a>',
					'<a href="#" class="btn btn-blue">Save changes</a>',
				'</div>',
			'</div>'].join('');
	
			$(tmpl).modal();
	});
	
	// CUSTOM MANAGER
	// ----------------------------------------- * -->
	// provide the container for all assigned modals to the manager
	var myManager = new ModalManager($('.page-container'));
	
	$('#customModal').on('click', function () {
			// helper function for modal creation
			myManager.createModal($('#myModal'));
	
		    /* Alternatively:
		    $('#myModal').modal({ manager: myManager });
		    */
	});
	
	// AJAX CONTENT
	// ----------------------------------------- * -->
	// NOTE: modal must be in the DOM before calling .load()
	var $modal = $('#ajax-modal');
	
	$('#ajaxModal').on('click', function () {
			// create the backdrop and wait for next modal to be triggered
			GlobalModalManager.loading();
	
			setTimeout(function () {
					$modal.load('assets/data/modal_ajax_test.html', '', function () {
							$modal.modal();
					});
			}, 1000);
	});
	
	$modal.on('click', '.update', function () {
			$modal.modal('loading');
			setTimeout(function () {
					$modal.modal('loading')
							.find('.modal-body')
							.prepend('<div class="alert alert-info fade in">' +
							'Data updated! <button type="button" class="close" data-dismiss="alert">&times;</button>' +
							'</div>');
			}, 1000);
	});


	
	
// MODAL DEMO for BOOTBOX
// ------------------------------------------------------------------------------------------------ * -->
$(function () {
        $("a.bs-alert").click(function (e) {
                e.preventDefault();
                bootbox.alert("Hello world!", function () {
                        console.log("Alert Callback");
                });
        });

        $("a.confirm").click(function (e) {
                e.preventDefault();
                bootbox.confirm("Are you sure?", function (confirmed) {
                        console.log("Confirmed: " + confirmed);
                });
        });

        $("a.bs-prompt").click(function (e) {
                e.preventDefault();
                bootbox.prompt("What is your name?", function (result) {
                        console.log("Result: " + result);
                });
        });

        $("a.prompt-default").click(function (e) {
                e.preventDefault();
                bootbox.prompt("What is your favourite Admin template?", "Cancel", "OK", function (result) {
                        console.log("Result: " + result);
                }, "Boo Admin");
        });

        $("a.dialog").click(function (e) {
                e.preventDefault();
                bootbox.dialog("I am a custom dialog", [{
                        "label": "Success!",
                        "class": "btn-green",
                        "callback": function () {
                                console.log("great success");
                        }
                }, {
                        "label": "Danger!",
                        "class": "btn-red",
                        "callback": function () {
                                console.log("uh oh, look out!");
                        }
                }, {
                        "label": "Click ME!",
                        "class": "btn-blue",
                        "callback": function () {
                                console.log("Primary button");
                        }
                }, {
                        "label": "Just a button..."
                }, {
                        "Condensed format": function () {
                                console.log("condensed");
                        }
                }]);
        });

        $("a.multiple").click(function (e) {
                e.preventDefault();

                bootbox.alert("Prepare for multiboxes...", "Argh!");

                setTimeout(function () {
                        bootbox.confirm("Are you having fun?", "No :(", "Yeah!", function (result) {
                                if(result) {
                                        bootbox.alert("Glad to hear it!");
                                } else {
                                        bootbox.alert("Aww boo. Click the button below to get rid of all these popups", function () {
                                                bootbox.hideAll();
                                        });
                                }
                        });
                }, 1000);
        });

        $("a.dialog-close").click(function (e) {
                e.preventDefault();
                var box = bootbox.alert("This dialog will close in two seconds");
                setTimeout(function () {
                        box.modal('hide');
                }, 2000);
        });

        $("a.generic-modal").click(function (e) {
                e.preventDefault();
                bootbox.modal('<img src="http://dummyimage.com/600x400/ccc/fff" alt=""/>', 'Modal popup!');
        });

        $("a.dynamic").click(function (e) {
                e.preventDefault();
                var str = $("<p>This content is actually a jQuery object, which will change in 3 seconds...</p>");
                bootbox.alert(str);
                setTimeout(function () {
                        str.html("See?");
                }, 3000);
        });

        $("a.onescape").click(function (e) {
                e.preventDefault();
                bootbox.dialog("Dismiss this dialog with the escape key...", {
                        "label": "Press Escape!",
                        "class": "btn-red",
                        "callback": function () {
                                console.log("Oi! Press escape!");
                        }
                }, {
                        "onEscape": function () {
                                bootbox.alert("This alert was triggered by the onEscape callback of the previous dialog", "Dismiss");
                        }
                });
        });

        $("a.nofade").click(function (e) {
                e.preventDefault();
                bootbox.dialog("This dialog does not fade in or out, and thus does not depend on <strong>bootstrap-transitions.js</strong>.", {
                        "OK": function () {}
                }, {
                        "animate": false
                });
        });

        $("a.nobackdrop").click(function (e) {
                e.preventDefault();
                bootbox.dialog("This dialog does not have a backdrop element", {
                        "OK": function () {}
                }, {
                        "backdrop": false
                });
        });

        $("a.icons-explicit").click(function (e) {
                e.preventDefault();
                bootbox.dialog("Custom dialog with icons being passed explicitly into <b>bootbox.dialog</b>.", [{
                        "label": "Success!",
                        "class": "btn-green",
                        "icon": "fontello-icon-check"
                }, {
                        "label": "Danger!",
                        "class": "btn-red",
                        "icon": "fontello-icon-attention"
                }, {
                        "label": "Click ME!",
                        "class": "btn-blue",
                        "icon": "fontello-icon-target-2"
                }, {
                        "label": "Just a button...",
                        "class": "btn-boo",
                        "icon": "fontello-icon-picture-1"
                }]);
        });

        $("a.icons-override").click(function (e) {
                e.preventDefault();
                bootbox.setIcons({
                        "OK": "fontello-icon-check",
                        "CANCEL": "fontello-icon-block-2",
                        "CONFIRM": "fontello-icon-ok-4"
                });

                bootbox.confirm("This dialog invokes <b>bootbox.setIcons()</b> to set icons for the standard three labels of OK, CANCEL and CONFIRM, before calling a normal <b>bootbox.confirm</b>", function (result) {
                        bootbox.alert("This dialog is just a standard <b>bootbox.alert()</b>. <b>bootbox.setIcons()</b> only needs to be set once to affect all subsequent calls", function () {
                                bootbox.setIcons(null);
                        });
                });
        });

        $("a.no-close-button").click(function (e) {
                e.preventDefault();
                bootbox.dialog("If a button's handler now explicitly returns <b>false</b>, the dialog will not be closed. Note that if anything <b>!== false</b> - e.g. nothing, true, null etc - is returned, the dialog will close.", [{
                        "I'll close on click": function () {
                                console.log("close on click");
                                return true;
                        },
                }, {
                        "I won't!": function () {
                                console.log("returning false...");
                                return false;
                        }
                }]);
        });
});