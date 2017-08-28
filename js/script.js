// ----------------------------------------cari univ------------------------------
const theSearch = document.getElementById('universitasSearch');
const uniResult = document.getElementById('universitasSearchResult');
const dosenSearchWrapper = document.getElementById('dosenSearchSection');
const dosenResult = document.getElementById('dosenSearchResult');
let searchResult;
let index;

// Validate user's input for universitas name
function searchUniversity() {
	uniResult.innerHTML = "";
	searchResult = [];
	if (theSearch.value != "" && theSearch.value.length != 1){
			for (i = 0; i < allData.length; i++){
					for (j = 0; j < allData[i].universitas.length; j++){
							if (allData[i].universitas[j].toLowerCase().indexOf(theSearch.value.toLowerCase()) != -1)
								{
									if (!searchResult.includes(allData[i].universitas[0]))
										{
											searchResult.push(allData[i].universitas[0]);
											index = i;
										}
								}
					}
			}
	}
  for(var i = 0; i < searchResult.length; i++) {
		  let attributeItem = document.createAttribute("onclick");
			attributeItem.value = "getTheUniversity(" + i.toString() + ");";
      let item = document.createElement('li');
      let link = document.createElement('a');
      item.appendChild(document.createTextNode(searchResult[i]));
			item.setAttributeNode(attributeItem);
      link.appendChild(item);
      uniResult.appendChild(link);
  }
}

// Validate user's input for dosen name
function searchDosen() {
	dosenResult.innerHTML = "";
	searchResult = [];
	if (dosenSearch.value != "" && dosenSearch.value.length!=1){
			for (i = 0; i < allData[index].dosen.length; i++){
				if (allData[index].dosen[i].toLowerCase().indexOf(dosenSearch.value.toLowerCase()) != -1)
						searchResult.push(allData[index].dosen[i]);
			}
	}
  for(var i = 0; i < searchResult.length; i++) {
		  let attributeItem = document.createAttribute("class");
			attributeItem.value = "list-group";
			dosenResult.setAttributeNode(attributeItem);
			attributeItem = document.createAttribute("onclick");
			attributeItem.value = "getDosen(" + i.toString() + ");";
      let item = document.createElement('li');
      let link = document.createElement('a');
      item.appendChild(document.createTextNode(searchResult[i]));
			item.setAttributeNode(attributeItem);
      link.appendChild(item);
      dosenResult.appendChild(link);
  }
}

// Retrieve the data of the university based on user's input
function getTheUniversity(param){
		uniResult.innerHTML = "";
	  theSearch.value = searchResult[param];
		let dosenInput = document.createElement('input');
		let dosenInputAttribute = document.createAttribute("placeholder");
		dosenInputAttribute.value = "Ketik nama dosen, contoh, Lili Ayu Wulandhari";
		dosenInput.setAttributeNode(dosenInputAttribute);
		dosenInputAttribute = document.createAttribute("type");
		dosenInputAttribute.value = "text";
		dosenInput.setAttributeNode(dosenInputAttribute);
		dosenInputAttribute = document.createAttribute("onkeyup");
		dosenInputAttribute.value = "searchDosen();";
		dosenInput.setAttributeNode(dosenInputAttribute);
		dosenInputAttribute = document.createAttribute("id");
		dosenInputAttribute.value = "dosenSearch";
		dosenInput.setAttributeNode(dosenInputAttribute);
		dosenSearchWrapper.appendChild(dosenInput);
		let newSearchUniAttribute = document.createAttribute("readonly");
		theSearch.setAttributeNode(newSearchUniAttribute);
		theSearch.style.background = "grey";
}

// Retrieve the data of dosen based on user's input
function getDosen(param){
		dosenResult.innerHTML = "";
	  dosenSearch.value = searchResult[param];
}

// ------------------------------------end cari univ------------------------------
