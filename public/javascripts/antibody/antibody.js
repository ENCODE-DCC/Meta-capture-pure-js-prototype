$(document).ready(function() {

  // Overall viewmodel for this screen, along with initial state
  function AntibodiesViewModel() {
    var self = this;
    
	self.availableOrgs = [
		'H. sapiens',
		'M. musculus'
	]
    // Get list of HGNC targets from server??
    self.availableTargets = [    
    		{
			"symbol": "ZNF705F"
			},
			{
			"symbol": "ZNF705G"
			},
			{
			"symbol": "ZNF706"
			},
			{
			"symbol": "ZNF707"
			},
			{
			"symbol": "ZNF708"
			},
			{
			"symbol": "ZNF709"
			},
			{
			"symbol": "ZNF70P1"
			},
			{
			"symbol": "ZNF71"
			},
			{
			"symbol": "ZNF710"
			},
			{
			"symbol": "ZNF711"
			},
			{
			"symbol": "ZNF713"
			},
			{
			"symbol": "ZNF714"
			},
			{
			"symbol": "ZNF716"
			},
			{
			"symbol": "ZNF717"
			},
			{
			"symbol": "ZNF718"
			},
			{
			"symbol": "ZNF720"
			},
			{
			"symbol": "ZNF720P1"
			},
			{
			"symbol": "ZNF721"
			},
			{
			"symbol": "ZNF722"
			},
			{
			"symbol": "ZNF723"
			},
			{
			"symbol": "ZNF724P"
			},
			{
			"symbol": "ZNF725"
			},
			{
			"symbol": "ZNF726"
			},
			{
			"symbol": "ZNF726P1"
			},
			{
			"symbol": "ZNF727"
			},
			{
			"symbol": "ZNF728"
			},
			{
			"symbol": "ZNF729"
			},
			{
			"symbol": "ZNF72P"
			},
			{
			"symbol": "ZNF73"
			},
			{
			"symbol": "ZNF730"
			},
			{
			"symbol": "ZNF731"
			},
			{
			"symbol": "ZNF732"
			},
			{
			"symbol": "ZNF733"
			},
			{
			"symbol": "ZNF734"
			},
			{
			"symbol": "ZNF735"
			},
			{
			"symbol": "ZNF736"
			},
			{
			"symbol": "ZNF736P10Y"
			},
			{
			"symbol": "ZNF736P11Y"
			},
			{
			"symbol": "ZNF736P12Y"
			},
			{
			"symbol": "ZNF736P1Y"
			},
			{
			"symbol": "ZNF736P2Y"
			},
			{
			"symbol": "ZNF736P3Y"
			},
			{
			"symbol": "ZNF736P4Y"
			},
			{
			"symbol": "ZNF736P5Y"
			},
			{
			"symbol": "ZNF736P6Y"
			},
			{
			"symbol": "ZNF736P7Y"
			},
			{
			"symbol": "ZNF736P8Y"
			},
			{
			"symbol": "ZNF736P9Y"
			},
			{
			"symbol": "ZNF737"
			},
			{
			"symbol": "ZNF738"
			},
			{
			"symbol": "ZNF74"
			},
			{
			"symbol": "ZNF740"
			},
			{
			"symbol": "ZNF746"
			},
			{
			"symbol": "ZNF747"
			},
			{
			"symbol": "ZNF749"
			},
			{
			"symbol": "ZNF750"
			},
			{
			"symbol": "ZNF75A"
			},
			{
			"symbol": "ZNF75BP"
			},
			{
			"symbol": "ZNF75CP"
			},
			{
			"symbol": "ZNF75D"
			},
			{
			"symbol": "ZNF76"
			},
			{
			"symbol": "ZNF761"
			},
			{
			"symbol": "ZNF763"
			},
			{
			"symbol": "ZNF764"
			},
			{
			"symbol": "ZNF765"
			},
			{
			"symbol": "ZNF766"
			},
			{
			"symbol": "ZNF767"
			},
			{
			"symbol": "ZNF768"
			},
			{
			"symbol": "ZNF77"
			},
			{
			"symbol": "ZNF770"
			},
			{
			"symbol": "ZNF771"
			},
			{
			"symbol": "ZNF772"
			},
			{
			"symbol": "ZNF773"
			},
			{
			"symbol": "ZNF774"
			},
			{
			"symbol": "ZNF775"
			},
			{
			"symbol": "ZNF776"
			},
			{
			"symbol": "ZNF777"
			},
			{
			"symbol": "ZNF778"
			},
			{
			"symbol": "ZNF780A"
			},
			{
			"symbol": "ZNF780B"
			},
			{
			"symbol": "ZNF781"
			},
			{
			"symbol": "ZNF782"
			},
			{
			"symbol": "ZNF783"
			},
			{
			"symbol": "ZNF784"
			},
			{
			"symbol": "ZNF785"
			},
			{
			"symbol": "ZNF786"
			},
			{
			"symbol": "ZNF787"
			},
			{
			"symbol": "ZNF788"
			},
			{
			"symbol": "ZNF789"
			},
			{
			"symbol": "ZNF79"
			},
			{
			"symbol": "ZNF790"
			},
			{
			"symbol": "ZNF791"
			},
			{
			"symbol": "ZNF792"
			},
			{
			"symbol": "ZNF793"
			},
			{
			"symbol": "ZNF799"
			},
			{
			"symbol": "ZNF8"
			},
			{
			"symbol": "ZNF80"
			},
			{
			"symbol": "ZNF800"
			},
			{
			"symbol": "ZNF804A"
			},
			{
			"symbol": "ZNF804B"
			},
			{
			"symbol": "ZNF805"
			},
			{
			"symbol": "ZNF806"
			},
			{
			"symbol": "ZNF807"
			},
			{
			"symbol": "ZNF808"
			},
			{
			"symbol": "ZNF81"
			},
			{
			"symbol": "ZNF812"
			},
			{
			"symbol": "ZNF813"
			},
			{
			"symbol": "ZNF814"
			},
			{
			"symbol": "ZNF815"
			},
			{
			"symbol": "ZNF816"
			},
			{
			"symbol": "ZNF816-ZNF321P"
			},
			{
			"symbol": "ZNF818P"
			},
			{
			"symbol": "ZNF821"
			},
			{
			"symbol": "ZNF823"
			},
			{
			"symbol": "ZNF826P"
			},
			{
			"symbol": "ZNF827"
			},
			{
			"symbol": "ZNF828"
			},
			{
			"symbol": "ZNF829"
			},
			{
			"symbol": "ZNF83"
			},
			{
			"symbol": "ZNF830"
			},
			{
			"symbol": "ZNF831"
			},
			{
			"symbol": "ZNF833P"
			},
			{
			"symbol": "ZNF835"
			},
			{
			"symbol": "ZNF836"
			},
			{
			"symbol": "ZNF837"
			},
			{
			"symbol": "ZNF839"
			},
			{
			"symbol": "ZNF839P1"
			},
			{
			"symbol": "ZNF84"
			},
			{
			"symbol": "ZNF840"
			},
			{
			"symbol": "ZNF841"
			},
			{
			"symbol": "ZNF843"
			},
			{
			"symbol": "ZNF844"
			},
			{
			"symbol": "ZNF845"
			},
			{
			"symbol": "ZNF846"
			},
			{
			"symbol": "ZNF847P"
			},
			{
			"symbol": "ZNF848P"
			},
			{
			"symbol": "ZNF849P"
			},
			{
			"symbol": "ZNF85"
			},
			{
			"symbol": "ZNF850"
			},
			{
			"symbol": "ZNF852"
			},
			{
			"symbol": "ZNF853"
			},
			{
			"symbol": "ZNF859P"
			},
			{
			"symbol": "ZNF860"
			},
			{
			"symbol": "ZNF861P"
			},
			{
			"symbol": "ZNF862"
			},
			{
			"symbol": "ZNF863P"
			},
			{
			"symbol": "ZNF865"
			},
			{
			"symbol": "ZNF876P"
			},
			{
			"symbol": "ZNF877P"
			},
			{
			"symbol": "ZNF878"
			},
			{
			"symbol": "ZNF879"
			},
			{
			"symbol": "ZNF880"
			},
			{
			"symbol": "ZNF883"
			},
			{
			"symbol": "ZNF884P"
			},
			{
			"symbol": "ZNF885P"
			},
			{
			"symbol": "ZNF886P"
			},
			{
			"symbol": "ZNF887"
			},
			{
			"symbol": "ZNF888"
			},
			{
			"symbol": "ZNF890P"
			},
			{
			"symbol": "ZNF891"
			},
			{
			"symbol": "ZNF90"
			},
			{
			"symbol": "ZNF90P1"
			},
			{
			"symbol": "ZNF90P2"
			},
			{
			"symbol": "ZNF90P3"
			},
			{
			"symbol": "ZNF91"
			},
			{
			"symbol": "ZNF92"
			},
			{
			"symbol": "ZNF92P1Y"
			},
			{
			"symbol": "ZNF92P2"
			},
			{
			"symbol": "ZNF92P3"
			},
			{
			"symbol": "ZNF93"
			},
			{
			"symbol": "ZNF962P"
			},
			{
			"symbol": "ZNF98"
			},
			{
			"symbol": "ZNF99"
			},
			{
			"symbol": "ZNFX1"
			},
			{
			"symbol": "ZNHIT1"
			},
			{
			"symbol": "ZNHIT2"
			},
			{
			"symbol": "ZNHIT3"
			},
			{
			"symbol": "ZNHIT6"
			},
			{
			"symbol": "ZNRD1"
			},
			{
			"symbol": "ZNRD1-AS1"
			},
			{
			"symbol": "ZNRF1"
			},
			{
			"symbol": "ZNRF2"
			},
			{
			"symbol": "ZNRF3"
			},
			{
			"symbol": "ZNRF4"
			},
			{
			"symbol": "ZP1"
			},
			{
			"symbol": "ZP2"
			},
			{
			"symbol": "ZP3"
			},
			{
			"symbol": "ZP4"
			},
			{
			"symbol": "ZPBP"
			},
			{
			"symbol": "ZPBP2"
			},
			{
			"symbol": "ZPLD1"
			},
			{
			"symbol": "ZRANB1"
			},
			{
			"symbol": "ZRANB2"
			},
			{
			"symbol": "ZRANB3"
			},
			{
			"symbol": "ZRSR1"
			},
			{
			"symbol": "ZRSR2"
			},
			{
			"symbol": "ZSCAN1"
			},
			{
			"symbol": "ZSCAN10"
			},
			{
			"symbol": "ZSCAN12"
			},
			{
			"symbol": "ZSCAN12P1"
			},
			{
			"symbol": "ZSCAN16"
			},
			{
			"symbol": "ZSCAN18"
			},
			{
			"symbol": "ZSCAN2"
			},
			{
			"symbol": "ZSCAN20"
			},
			{
			"symbol": "ZSCAN21"
			},
			{
			"symbol": "ZSCAN22"
			},
			{
			"symbol": "ZSCAN23"
			},
			{
			"symbol": "ZSCAN29"
			},
			{
			"symbol": "ZSCAN30"
			},
			{
			"symbol": "ZSCAN4"
			},
			{
			"symbol": "ZSCAN5A"
			},
			{
			"symbol": "ZSCAN5B"
			},
			{
			"symbol": "ZSCAN5C"
			},
			{
			"symbol": "ZSCAN5D"
			},
			{
			"symbol": "ZSWIM1"
			},
			{
			"symbol": "ZSWIM2"
			},
			{
			"symbol": "ZSWIM3"
			},
			{
			"symbol": "ZSWIM4"
			},
			{
			"symbol": "ZSWIM5"
			},
			{
			"symbol": "ZSWIM6"
			},
			{
			"symbol": "ZSWIM7"
			},
			{
			"symbol": "ZUFSP"
			},
			{
			"symbol": "ZW10"
			},
			{
			"symbol": "ZWILCH"
			},
			{
			"symbol": "ZWINT"
			},
			{
			"symbol": "ZXDA"
			},
			{
			"symbol": "ZXDB"
			},
			{
			"symbol": "ZXDC"
			},
			{
			"symbol": "ZYG11A"
			},
			{
			"symbol": "ZYG11AP1"
			},
			{
			"symbol": "ZYG11B"
			},
			{
			"symbol": "ZYX"
			},
			{
			"symbol": "ZZEF1"
			},
			{
			"symbol": "ZZZ3"
			},
			{
			"symbol": "SUZ12"
			},
			{
			"symbol": "TCF12"
			}
    ];
    // Editable data
    self.antibodies = ko.mapping.fromJS([]);
    self.viewAb = ko.observable();

	self.getAntibodies = function() {
        $.ajax({
            type: 'GET',
            url: '/api/antibody',
            context: this,
            success: function(data) {
                self.SuccessfullyRetrievedModelsFromAjax(data);
            },
            dataType: 'json'
        });
    };

    this.SuccessfullyRetrievedModelsFromAjax = function(models) {
        ko.mapping.fromJS(models, self.antibodies);
    };
    
    self.addAntibody = function() {
      self.antibodies.push(ko.mapping.fromJS(
      	{ name: "New Antibody",
      										  target: { name: "None", organism: 'H. sapiens'},
      										  source: "",
      										  product_id: "",
      										  lot_id: "",
      										  validation_documents: [],
      										  _id: null // note this distinguished it from a DB object
      										  }));
    };

    self.removeAntibody = function(ab) {
      var ab_js = ko.toJS(ab);
      if (ab_js._id) {
       	$.ajax({
      		url: "/api/antibody/"+ab_js._id,
      		type: "DELETE",
      		data: ab_js,
      		success: function(data, textStatus, jqXHR) {
			        console.log(ab_js._id+" DELETED");
        			console.log(textStatus);
        			console.dir(jqXHR);
        			self.antibodies.remove(ab);
    			}	
      	});
     } else {
     	     self.antibodies.remove(ab);
     }
          
    };

    self.saveAntibody = function(ab) {
      var ab_js = ko.toJS(ab);
      if (ab_js._id) {
      	// put to update
      	$.ajax({
      		url: "/api/antibody/"+ab_js._id,
      		type: "PUT",
      		data: ab_js,
      		success: function(data, textStatus, jqXHR) {
			        console.log("PUT response:");
 			 	    console.dir(data);
        			console.log(textStatus);
        			console.dir(jqXHR);
        			//need to update self.antibodies?
    			}	
      	});
      } else {
      	// post to create
      	$.post('/api/antibody',ko.toJS(ab),
      	  function(data, textStatus, jqXHR) {
    		console.log("POST response:");
    		console.dir(data);
    		console.log(textStatus);
    		console.dir(jqXHR);
    		// need to update self.antibodies?
    	 }
    	 );
      }
    };
    
    self.viewJSON = function(ab) {
      self.viewAb(ko.toJSON(ab));
    };

    }

  ko.applyBindings(new AntibodiesViewModel());
});
