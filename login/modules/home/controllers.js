'use strict';

var id = 0;
 
angular.module('Home', ['ngStorage'])
.controller('HomeController',
    ['$scope', '$location', '$localStorage', '$sessionStorage', '$rootScope',
    function ($scope, $location, $localStorage, $sessionStorage, $rootScope) {

$scope.Save = function () {
$localStorage.json = $rootScope.globals.currentUser.js;
            }
$scope.Get = function () {
		 $rootScope.globals.currentUser.js = $localStorage.json;
	$location.path($rootScope.globals.currentUser.screen); 
            }

	$scope.counter = 1;
	id = 	$rootScope.globals.currentUser.id;

 $scope.variable1 = $rootScope.globals.currentUser.js;
 $scope.json = JSON.stringify($scope.variable1);

 var data = [["one", "info 1", "additional 1"], ["two", "info 2", "additional 2"]],
    csvContent = [], output, objectURL;

data.forEach(function(infoArray, index) {
    var dataString = infoArray.join(",");
    csvContent += index < infoArray.length ? dataString+ "\n" : dataString;
});

output = new Blob([csvContent], { type: 'text/csv' });
objectURL = URL.createObjectURL(output);
/*
gapi.savetodrive.render('savetodrive-div', {
  src: objectURL,
  filename: 'save-to-drive.csv',
  sitename: 'Example'
});
*/


 // export page definition to json file
    $scope.exportToFile = function(){
        var filename = 'json.txt'       
        var blob = new Blob([$scope.json], {type: 'text/plain'});
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        } else{
            var e = document.createEvent('MouseEvents'),
            a = document.createElement('a');
            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            // window.URL.revokeObjectURL(a.href); // clean the url.createObjectURL resource
        }
    }


$scope.index = id + 1 + " of " + $scope.variable1[0].causes[0].cause.length;
$scope.movel = function () {
	id--;
        if(id < 0)
		id = 0;
	$rootScope.globals.currentUser.id = id;
	$scope.index = id + 1 + " of " + $scope.variable1[0].causes[0].cause.length;
$scope.title = $scope.variable1[0].causes[0].cause[id].title;
$scope.chron1 = $scope.variable1[0].causes[0].cause[id].chrons[0].e1;
$scope.chron1time = $scope.variable1[0].causes[0].cause[id].chrons[0].time1;
//data for client
$scope.clientname  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].name;
$scope.clientaddress  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].address;
$scope.clientemail1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].emails[0].email1;
$scope.clientemail2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].emails[0].email2;
$scope.clientmob1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile1;
$scope.clientmob2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile2;

//data for opp
$scope.oppname  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].name;
$scope.oppaddress  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].address;
$scope.oppemail1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].emails[0].email1;
$scope.oppemail2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].emails[0].email2;
$scope.oppmob1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].mobiles[0].mobile1;
$scope.oppmob2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].mobiles[0].mobile2;
	$location.path($rootScope.globals.currentUser.screen);
}

//window.localStorage.setItem('key', value);
//window.localStorage.getItem('key');
//window.localStorage.removeItem('key');
$scope.mover = function () {
	id++;
	if(id >= $scope.variable1[0].causes[0].cause.length)
	  id = $scope.variable1[0].causes[0].cause.length - 1;
	$rootScope.globals.currentUser.id = id;
	$scope.index = id + 1 + " of " + $scope.variable1[0].causes[0].cause.length;
	$scope.title = $scope.variable1[0].causes[0].cause[id].title;
$scope.chron1 = $scope.variable1[0].causes[0].cause[id].chrons[0].e1;
$scope.chron1time = $scope.variable1[0].causes[0].cause[id].chrons[0].time1;
//data for client
$scope.clientname  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].name;
$scope.clientaddress  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].address;
$scope.clientemail1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].emails[0].email1;
$scope.clientemail2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].emails[0].email2;
$scope.clientmob1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile1;
$scope.clientmob2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile2;

//data for opp
$scope.oppname  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].name;
$scope.oppaddress  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].address;
$scope.oppemail1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].emails[0].email1;
$scope.oppemail2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].emails[0].email2;
$scope.oppmob1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].mobiles[0].mobile1;
$scope.oppmob2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].mobiles[0].mobile2;
	$location.path($rootScope.globals.currentUser.screen);
}

$scope.title = $scope.variable1[0].causes[0].cause[id].title;
$scope.chron1 = $scope.variable1[0].causes[0].cause[id].chrons[0].e1;
$scope.chron1time = $scope.variable1[0].causes[0].cause[id].chrons[0].time1;
//data for client
$scope.clientname  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].name;
$scope.clientaddress  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].address;
$scope.clientemail1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].emails[0].email1;
$scope.clientemail2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].emails[0].email2;
$scope.clientmob1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile1;
$scope.clientmob2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile2;

//data for opp
$scope.oppname  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].name;
$scope.oppaddress  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].address;
$scope.oppemail1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].emails[0].email1;
$scope.oppemail2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].emails[0].email2;
$scope.oppmob1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].mobiles[0].mobile1;
$scope.oppmob2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].mobiles[0].mobile2;

$scope.viewCause = function (i) {
/*
	id = Integer.parseInt(idVal) - 1;
$scope.title = $scope.variable1[0].causes[0].cause[id].title;
$scope.chron1 = $scope.variable1[0].causes[0].cause[id].chrons[0].e1;
//data for client
$scope.clientname  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].name;
$scope.clientaddress  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].address;
$scope.clientemail1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].emails[0].email1;
$scope.clientemail2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].emails[0].email2;
$scope.clientmob1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile1;
$scope.clientmob2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile2;

//data for opp
$scope.oppname  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].name;
$scope.oppaddress  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].address;
$scope.oppemail1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].emails[0].email1;
$scope.oppemail2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].emails[0].email2;
$scope.oppmob1  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].mobiles[0].mobile1;
$scope.oppmob2  = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[0].mobiles[0].mobile2;
*/ 
	id = i - 1;
	$rootScope.globals.currentUser.id = id;
	$location.path('/7');
}

$scope.addClient = function () {

$rootScope.globals.currentUser.js[0].causes[0].cause[id].clients.push({
			"name" : "client1",
			"emails": [{"email1" : "me@my.com"}, {"email2" : "abc@def.com"}],
			"mobiles" : [{ "mobile1": "911234567890"}, { "mobile2": "9812345678"}],
			"address" : "house#1, down street"
		});

var ci = $rootScope.globals.currentUser.js[0].causes[0].cause[id].clients.length - 1;
$rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[ci].name = $scope.newtitle;
$rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[ci].address = $scope.newaddress;
$scope.$storage.json = $rootScope.globals.currentUser.js;
$location.path('/7');
}

$scope.addOpp = function () {

$rootScope.globals.currentUser.js[0].causes[0].cause[id].opps.push({
			"name" : "opp1",
			"emails": [{"email1" : "me@my.com"}, {"email2" : "abc@def.com"}],
			"mobiles" : [{ "mobile1": "911234567890"}, { "mobile2": "9812345678"}],
			"address" : "house#1, down street"
		});

var oi = $rootScope.globals.currentUser.js[0].causes[0].cause[id].opps.length - 1;
$rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[oi].name = $scope.newtitle;
$rootScope.globals.currentUser.js[0].causes[0].cause[id].opps[oi].address = $scope.newaddress;
$scope.$storage.json = $rootScope.globals.currentUser.js;
$location.path('/7');
}

$scope.addMob = function () {

$rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile1 = $scope.clientmob1;
$scope.clientmob1 = "";
$scope.$storage.json = $rootScope.globals.currentUser.js;
//$location.path('/7');
}

$scope.addMob2 = function () {
$rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile2 = $scope.clientmob2;
$scope.clientmob2 = "";
$scope.$storage.json = $rootScope.globals.currentUser.js;
//$location.path('/7');
}

$scope.subMob2 = function () {
$rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile2 = "";
$scope.clientmob2 = "";

//$location.path('/7');
}

$scope.addemail1 = function () {

$rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].emails[0].email1 = $scope.clientemail1;
$scope.clientemail1 = "";
$scope.$storage.json = $rootScope.globals.currentUser.js;
//$location.path('/7');
}

$scope.addemail2 = function () {
$rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].emails[0].email2 = $scope.clientemail2;
$scope.clientemail2 = "";
$scope.$storage.json = $rootScope.globals.currentUser.js;
//$location.path('/7');
}

$scope.subemail2 = function () {
$rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].emails[0].email2 = "";
$scope.clientemail2 = "";
$scope.$storage.json = $rootScope.globals.currentUser.js;
//$location.path('/7');
}


$scope.addemail1 = function () {

$rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile1 = $scope.clientmob1;
$scope.clientmob1 = "";
$scope.$storage.json = $rootScope.globals.currentUser.js;
//$location.path('/7');
}

$scope.addemail2 = function () {
$rootScope.globals.currentUser.js[0].causes[0].cause[id].clients[0].mobiles[0].mobile2 = $scope.clientmob2;
$scope.clientmob2 = "";
$scope.$storage.json = $rootScope.globals.currentUser.js;
//$location.path('/7');
}

$scope.cause = function () {


$rootScope.globals.currentUser.js[0].causes[0].cause.push({ "i": "1", 
		"time": "8/28/2019 6:30p.m.", 
		"title": "Ram Swaroop vs ABC Panjab and Haryana HC", 
		"color": "brown",
		"chrons": [
			{ "e1": "Evidence is to be submitted by O/P",
				"time1": "8/31/2019 2:45p.m.",
			"e2": "",
			"time2": "8/31/2019 8:30p.m."
			}
	                ],
		"clients" : [{
			"name" : "client1",
			"emails": [{"email1" : "me@my.com"}, {"email2" : "abc@def.com"}],
			"mobiles" : [{ "mobile1": "911234567890"}, { "mobile2": "9812345678"}],
			"address" : "house#1, down street"
		}],"opps": [{
			"name" : "opp1",
			"emails": [{"email1" : "abc@def.com"}, {"email2" : "me@my.com"}],
			"mobiles" : [{ "mobile1": "9812345678"}, { "mobile2": "911234567890"}],
			"address" : "house#2, down street"
			}]
		});
  id = $rootScope.globals.currentUser.js[0].causes[0].cause.length - 1;
	if(id%2 == 0)
		 $rootScope.globals.currentUser.js[0].causes[0].cause[id].color = "brown";
	else
		 $rootScope.globals.currentUser.js[0].causes[0].cause[id].color = "yellow";
 $rootScope.globals.currentUser.js[0].causes[0].cause[id].i = id + 1; $rootScope.globals.currentUser.js[0].causes[0].cause[id].title = $scope.newtitle; $rootScope.globals.currentUser.js[0].causes[0].cause[id].time = $scope.newtime; $rootScope.globals.currentUser.js[0].causes[0].cause[id].chrons[0].e1 = $scope.newchron; $location.path('/4');
$scope.$storage.json = $rootScope.globals.currentUser.js;  
}   }]);
