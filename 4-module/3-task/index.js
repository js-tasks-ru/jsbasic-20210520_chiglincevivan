function highlight(table) {
  for (tr of table.tBodies[0].querySelectorAll('tr')) {
    const status = tr.querySelector('td:nth-child(4)');
    if (!status.hasAttribute("data-available")) tr.hidden = true;
    if (status.dataset.available == 'true') tr.classList.add('available');
    if (status.dataset.available == 'false') tr.classList.add('unavailable');

    const age = tr.querySelector('td:nth-child(2)');
    if (+age.textContent < 18) tr.setAttribute('style', 'text-decoration: line-through;')

    const sex = tr.querySelector('td:nth-child(3)');
    if (sex.textContent == 'm') tr.classList.add('male');
    if (sex.textContent == 'f') tr.classList.add('female')

  }
}
