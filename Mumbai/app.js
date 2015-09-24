Ext.application({
	name : "Mumbai",
	appFolder : "app", 
	controllers : [],
	models : ["Person"],
	stores : ["PersonStore"],
	views : ["LoginScreen", "HomeScreen", "AddPersonPanel", "PersonGrid"],
	launch : function(){
		this.viewport = Ext.create("Ext.container.Viewport",{
			renderTo : Ext.getBody(),
			layout : "card",
			items : [
				{
					xtype : "loginscreen"
				},
				{ 
					xtype: "homescreen"
				}
			]
		});
	}
});