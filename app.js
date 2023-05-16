const name = document.querySelector('#name');
const number = document.querySelector('#number');
const addBtn = document.querySelector('#addBtn');
const searchBtn = document.querySelector('#searchBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const updateBtn = document.querySelector('#updateBtn');


addBtn.onclick = () => {
  console.log(`${name.value} ${number.value}`);
  let tname = document.createElement('td');
  let tnumber = document.createElement('td');
  if (name.value === '' || number.value === '') {
    alert('BOŞLUKLARI DOLDURALIM');
    return;
  }
  tname.innerHTML = name.value;
  tnumber.innerHTML = number.value;
  let tr = document.createElement('tr');
  tr.appendChild(tname); // 
  tr.appendChild(tnumber);
  document.querySelector('#table').appendChild(tr);
  name.value = '';
  number.value = '';
};

deleteBtn.onclick = () => {
  let tr = document.querySelector('#table tr:last-child');
  tr.remove();
}

updateBtn.onclick = () => {
  let tr = document.querySelector('#table tr:last-child');
  let tds = tr.querySelectorAll('td');
  tds[0].innerHTML = name.value;
  tds[1].innerHTML = number.value;
  name.value = '';
  number.value = '';
}