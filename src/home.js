import {createElement} from './domTools';

export function home() {
	const homeDiv = document.createElement('div');
	homeDiv.classList.add('home');

	homeDiv.appendChild(createElement('button', 'Order now', 'order-button'));

	return homeDiv;	
}
