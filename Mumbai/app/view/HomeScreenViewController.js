Ext.define("Mumbai.view.HomeScreenViewController", {
	extend : "Ext.app.ViewController",
	alias : "controller.home",
	onButtonClicked : function ()
	{
			alert ("HOME Controller invoked");
			var name = this.lookupReference("nametext").getValue();
			var age = this.lookupReference("agetext").getValue();
			var personStore = Mumbai.getApplication().getStore("PersonStore");
			// Mumbai.getApplication().viewport.add({
			// 	xtype : "homescreen"
			// });	
			personStore.add({name:name,age:age});
	//		Mumbai.getApplication().viewport.setActiveItem(0);
	}
});