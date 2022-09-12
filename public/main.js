import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#name');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const label = document.querySelector('#name-label');
const ul = document.querySelector('.finance-list');
const list = new ListTemplate(ul);
type.addEventListener('change', (e) => {
    if (type.value === 'invoice') {
        label.innerHTML = 'Client';
    }
    else {
        label.innerHTML = 'Recipient';
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    tofrom.value = '';
    details.value = '';
    amount.value = '';
});
