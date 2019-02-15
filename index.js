document.addEventListener("DOMContentLoaded", (event)=>{
	const db = firebase.firestore();
	const coll = db.collection("share");
	const docId = "test";
	const docRef = coll.doc(docId);

	document.getElementById("textarea").addEventListener('keyup',(e)=>{
		const text = document.getElementById("textarea").value;
		console.log(text);
		const obj = {
			id:docId,
			text: text
		};
		docRef.set(obj);
	});

	docRef.onSnapshot((doc)=>{
		if(doc.exists){
			const str = doc.data().text;
			document.getElementById("textarea").value = str;
		}

	});


});