function checkSelectAll(checkbox) {
  const selectall = document.querySelector('input[name="book"]');

  if (checkbox.checked === false) {
    selectall.checked = false;
  }
}

function selectAll(selectAll) {
  const checkboxes = document.getElementsByName("book");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}
