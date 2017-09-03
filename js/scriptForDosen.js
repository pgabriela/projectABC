// ----------------------------------------cari univ------------------------------
const theDosenUniSearch = document.getElementById('dosenUniSearch');
const theDosenUniSearchResult = document.getElementById('dosenUniSearchResult');
let dosenResult;
let uniResult;

// Validate user's input for universitas name
function searchDosenUniSearch() {
	theDosenUniSearchResult.innerHTML = "";
	dosenResult = [];
	uniResult = [];
	if (theDosenUniSearch.value.length > 1){
			for (i = 0; i < allData.length; i++){
					for (j = 0; j < allData[i].dosen.length; j++){
							if(allData[i].dosen[j].toLowerCase().indexOf(theDosenUniSearch.value.toLowerCase()) != -1 && !dosenResult.includes(allData[i].dosen[j]) && !uniResult.includes(allData[i].universitas[0]))
								{
										dosenResult.push(allData[i].dosen[j]);
										uniResult.push(allData[i].universitas[0]);
								}
					}
			}
	}
  for(var i = 0; i < dosenResult.length; i++) {
			let divDosen = document.createElement('div');
			let divUni = document.createElement('div');
			let attributeItem = document.createAttribute("class");
			let item = document.createElement('li');
			let link = document.createElement('a');

			attributeItem.value = "dosenName";
			divDosen.setAttributeNode(attributeItem);
			divDosen.appendChild(document.createTextNode(dosenResult[i]));

			attributeItem = document.createAttribute("class");
			attributeItem.value = "universitasName";
			divUni.setAttributeNode(attributeItem);
			divUni.appendChild(document.createTextNode(uniResult[i]));

			attributeItem = document.createAttribute("class");
			attributeItem.value = "resultWrapper";
			item.setAttributeNode(attributeItem);
			item.appendChild(divDosen);
			item.appendChild(divUni);

			attributeItem = document.createAttribute("onclick");
			attributeItem.value = "getDosen(" + i.toString() + ");";
			item.setAttributeNode(attributeItem);
      link.appendChild(item);
      theDosenUniSearchResult.appendChild(link);
  }
}

// Retrieve the data of the university based on user's input
function getDosen(param){
		theDosenUniSearchResult.innerHTML = "";
	  theDosenUniSearch.value = dosenResult[param];
}

// ------------------------------------end cari univ------------------------------
