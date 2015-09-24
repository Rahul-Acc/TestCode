Ext.define("Mumbai.view.LoginScreenViewController", {
	extend : "Ext.app.ViewController",
	alias : "controller.login",
	onLoginButtonClicked : function ()
	{
		var userName = this.lookupReference("usernametext");
		var password = this.lookupReference("passwordtext");
			alert ("Login Controller invoked");
			Mumbai.getApplication().viewport.add({
				xtype : "homescreen"
			});	
			Mumbai.getApplication().viewport.setActiveItem(1);
	}
});