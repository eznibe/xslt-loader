module.exports = function(content) {
  this.cacheable && this.cacheable();

  var dependencies = "var xslt = require("+JSON.stringify(require.resolve('xslt'))+");";

  // console.log('XSLT Loader:',JSON.stringify(content))
  var fun = "function tpl(data){ var xsl = "+JSON.stringify(content)+";"+
            "return xslt(data, xsl);;"+
            "};";
  var res = dependencies + " module.exports = " + JSON.stringify(content) + ";";

  this.callback(null, res);

}
