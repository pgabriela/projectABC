// ----------------------------------------cari univ------------------------------
const theUniversitasSearch = document.getElementById('universitasSearch');
const uniResult = document.getElementById('universitasSearchResult');
const theDosenSearch = document.getElementById('dosenSearch');
const dosenResult = document.getElementById('dosenSearchResult');
const daftarDosen = document.getElementById('lihatDaftarDosen');
const namaDosen = document.getElementById('ketikNamaDosen');
let userIsTyping = false;
let searchResult;
let index;

// Validate user's input for universitas name
function searchUniversity() {
	userIsTyping = true;
	$("#lihatDaftarDosen").prop('checked', false);
	$("#ketikNamaDosen").prop('checked', false);
	theDosenSearch.style.opacity = ".5";
	$("#dosenSearch").prop('readonly', true);
	theDosenSearch.value = "";
	uniResult.innerHTML = "";
	searchResult = [];
	if (theUniversitasSearch.value != "" && theUniversitasSearch.value.length != 1){
			for (i = 0; i < allData.length; i++){
					for (j = 0; j < allData[i].universitas.length; j++){
							temp = allData[i].universitas[j].toLowerCase().indexOf(theUniversitasSearch.value.toLowerCase());
							if (temp != -1 && (temp == 0 || allData[i].universitas[j][temp-1] == " ") && !searchResult.includes(allData[i].universitas[0]))
								{
										searchResult.push(allData[i].universitas[0]);
										index = i;
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
	if (theDosenSearch.value != "" && theDosenSearch.value.length!=1){
			for (i = 0; i < allData[index].dosen.length; i++){
				temp = allData[index].dosen[i].toLowerCase().indexOf(theDosenSearch.value.toLowerCase());
				if (temp != -1 && (temp == 0 || allData[index].dosen[i][temp-1] == " ")){
						searchResult.push(allData[index].dosen[i]);
				}
			}
	}
  	for(var i = 0; i < searchResult.length; i++) {
		let attributeItem = document.createAttribute("onclick");
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
	theUniversitasSearch.value = searchResult[param];
	userIsTyping = false;
}

// Retrieve the data of dosen based on user's input
function getDosen(param){
	dosenResult.innerHTML = "";
	dosenSearch.value = searchResult[param];
}

function checkOption(param){
	if(param && !userIsTyping){
		$("#dosenSearch").prop('readonly', false);
		theDosenSearch.style.opacity = "1";
	}
	else {
		$("#dosenSearch").prop('readonly', true);
		theDosenSearch.style.opacity = ".5";
	}
}

daftarDosen.addEventListener("click", function() {checkOption(false);}, false);
namaDosen.addEventListener("click", function() {checkOption(true);}, false);
// ------------------------------------end cari univ------------------------------
