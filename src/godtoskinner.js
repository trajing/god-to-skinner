// code shamelessly taken from cloud 2 butt
// (github panicsteve/cloud-to-butt)
// also fixed up a bit to function correctly on my firefox

console.log("live!");

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	if (node.tagName != undefined && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.contains('ace_editor'))) {
		return;
	}

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
  let v = textNode.nodeValue;
  // ackshually, the plural of "doctor skinner" is "doctors skinner"
	textNode.nodeValue = v.replace(/\bgod\b/gi, "Dr. Skinner").replace(/\bgods\b/, "Drs. Skinner");
}
