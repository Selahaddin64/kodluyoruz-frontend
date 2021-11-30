displayNotes();
let addBtn = document.getElementById('addBtn');

// Add local storage
addBtn.addEventListener('click', function () {

	let notesObj;
	let addNote = document.getElementById('addNote');
	let notesString = localStorage.getItem('notes');

	if (addNote.value == "") {
		alert("Lütfen not ekleme kısmını boş bırakmayın");
	}
	else {
		if (notesString == null) {
			notesObj = [];
		}
		else {
			notesObj = JSON.parse(notesString);
		}

		//Add date
		let dt = new Date();

		let dateTime = `${dt.getDate().toString().padStart(2, '0')}/${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;


		//pushing into local storage
		let tempObj = { text: addNote.value, time: dateTime };

		notesObj.push(tempObj);
		localStorage.setItem('notes', JSON.stringify(notesObj));

		addNote.value = '';

		displayNotes();
	}

});


//  Add Note
function displayNotes() {

	let notesObj;
	let notesString = localStorage.getItem('notes');

	if (notesString == null) {
		notesObj = [];
	}
	else {
		notesObj = JSON.parse(notesString);
	}

	let html = '';

	notesObj.forEach(function (element, index) {
		html += `
					<div class="card m-auto my-2 bg-dark text-white thatsMyNote" style="width: 18rem;">
						<div class="card-body">
							<h6>${element.time}</h6>
							<p class="card-text">${element.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
							<div class="d-flex justify-content-between">
							<button id="${index}" onclick=deleteNote(this.id) class="btn  btn-danger">Delete</button>
							<button id="${index}" onclick=updateNote(this.id) class="btn  btn-success">Update</button>
							</div>
						</div>
					</div>
				`;
	});

	let noteContent = document.getElementById('notes');

	if (notesObj.length != 0) {
		noteContent.innerHTML = html;
	}
	else {
		noteContent.innerHTML = '<h3 style="text-align: center; color: white;">Nothing to display</h3>';
	}

}


function deleteNote(index) {

	let confirmDel = confirm("Delete this note?");
	if (confirmDel == true) {
		let notes = localStorage.getItem("notes");
		if (notes == null) {
			notesObj = [];
		} else {
			notesObj = JSON.parse(notes);
		}

		notesObj.splice(index, 1);
		localStorage.setItem("notes", JSON.stringify(notesObj));
		displayNotes();
	}

}

function updateNote(index) {

	let notesObj;
	let notesString = localStorage.getItem('notes');

	if (notesString == null) {
		notesObj = [];
	}
	else {
		notesObj = JSON.parse(notesString);
	}

	console.log(notesObj);

	notesObj.findIndex((element, index) => {
		addNote.value = element.text;
	})
	notesObj.splice(index, 1);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	displayNotes();



}
