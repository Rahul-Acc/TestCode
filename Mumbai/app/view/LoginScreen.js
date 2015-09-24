Ext.define("Mumbai.view.LoginScreen", {
	extend : "Ext.panel.Panel",
	width : 400,
	height : 150,
	xtype : "loginscreen",
	title : "Login",
	requires : [
	"Mumbai.view.LoginScreenViewController"
	],
	controller : "login",
	items : [
					{
						xtype : "textfield", 
						fieldLabel : "User Name",
						reference : "usernametext"
					},	
					{
						xtype : "textfield", 
						fieldLabel : "Password",
						reference : "passwordtext"
					},	
					{
						xtype : "button", 
						text : "Login",
						listeners : {
							click : "onLoginButtonClicked"
						}
					}	
			]
});