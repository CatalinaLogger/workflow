	
	var um = UM.getEditor('editor');
	// 按钮的操作
	function insertHtml() {
		var value = prompt('插入html代码', '');
		um.execCommand('insertHtml', value)
	}
	function isFocus() {
		alert(um.isFocus())
	}
	function doBlur() {
		um.blur()
	}
	function createEditor() {
		enableBtn();
		um = UM.getEditor('editor');
	}
	function getAllHtml() {
		alert(UM.getEditor('editor').getAllHtml())
	}
	function getContent() {
		var arr = [];
		arr.push("使用editor.getContent()方法可以获得编辑器的内容");
		arr.push("内容为：");
		arr.push(UM.getEditor('editor').getContent());
		alert(arr.join("\n"));
	}
	function getPlainTxt() {
		var arr = [];
		arr.push("使用editor.getPlainTxt()方法可以获得编辑器的带格式的纯文本内容");
		arr.push("内容为：");
		arr.push(UM.getEditor('editor').getPlainTxt());
		alert(arr.join('\n'))
	}
	function setContent(isAppendTo) {
		var arr = [];
		arr.push("使用editor.setContent('欢迎使用umeditor')方法可以设置编辑器的内容");
		UM.getEditor('editor').setContent('欢迎使用umeditor', isAppendTo);
		alert(arr.join("\n"));
	}
	function setDisabled() {
		UM.getEditor('editor').setDisabled('fullscreen');
		disableBtn("enable");
	}
	
	function setEnabled() {
		UM.getEditor('editor').setEnabled();
		enableBtn();
	}
	
	function getText() {
		// 当你点击按钮时编辑区域已经失去了焦点，如果直接用getText将不会得到内容，所以要在选回来，然后取得内容
		var range = UM.getEditor('editor').selection.getRange();
		range.select();
		var txt = UM.getEditor('editor').selection.getText();
		alert(txt)
	}
	
	function getContentTxt() {
		var arr = [];
		arr.push("使用editor.getContentTxt()方法可以获得编辑器的纯文本内容");
		arr.push("编辑器的纯文本内容为：");
		arr.push(UM.getEditor('editor').getContentTxt());
		alert(arr.join("\n"));
	}
	function hasContent() {
		var arr = [];
		arr.push("使用editor.hasContents()方法判断编辑器里是否有内容");
		arr.push("判断结果为：");
		arr.push(UM.getEditor('editor').hasContents());
		alert(arr.join("\n"));
	}
	function setFocus() {
		UM.getEditor('editor').focus();
	}
	function deleteEditor() {
		disableBtn();
		UM.getEditor('editor').destroy();
	}
