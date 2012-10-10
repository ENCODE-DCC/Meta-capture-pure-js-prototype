import urllib, urllib2, xml.dom.minidom, json

urltemplate = 'http://www.avatar.se/HGNC/wr/genes;index.xml?%s' 
url = urltemplate % urllib.urlencode({'search': 'symbol', 'value': '*'})
xmldata = urllib2.urlopen(url).read()
dom = xml.dom.minidom.parseString(xmldata)

genes = [ { "symbol": node.getAttribute('xlink:title') }for node in dom.getElementsByTagName('gene') ]

print json.dumps(genes, sort_keys=True, indent=4)
