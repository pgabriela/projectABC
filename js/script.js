// ----------------------------------------cari univ------------------------------
const theSearch = document.getElementById('universitySearch');
let searchResult;
function search() {
	result = document.getElementById('result');
	result.innerHTML = "";
		searchResult = [];
	if (theSearch.value != "" && theSearch.value.length!=1){
			for (i = 0; i < allData.length; i++){
				if (allData[i].universitas.toLowerCase().indexOf(theSearch.value.toLowerCase()) != -1)
						searchResult.push(allData[i].universitas);
			}
		}
    for(var i = 0; i < searchResult.length; i++) {
			  var attributeItem = document.createAttribute("onclick");
				attributeItem.value = "getTheUniversity(" + i.toString() + ");";
        var item = document.createElement('li');
        var link = document.createElement('a');
        item.appendChild(document.createTextNode(searchResult[i]));
		item.setAttributeNode(attributeItem);
        link.appendChild(item);
        result.appendChild(link);
    }
}

function getTheUniversity(param){
		result.innerHTML = "";
		theSearch.value = searchResult[param];
}
// ------------------------------------end cari univ------------------------------
