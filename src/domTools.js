// Creates a list item element with name as ID and as text
export function createListItem(name) {
    const item = document.createElement('li');
    item.innerHTML = name;
    
    // Turns spaces into hyphens and to lower case and adds to id
    // Ex: "Contact Us" to "contact-us"
    name = name.replace(/\s+/g, '-').toLowerCase();

    item.classList.add(name);

    return item;
} 

// Create Paragraph element
export function createElement(element, text, className){
	const item = document.createElement(element);
	item.innerHTML = text;

	if(className !== undefined) {
		item.classList.add(className);
	}

	return item;
}

