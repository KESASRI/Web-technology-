function navigateToPage() {
  const selectElement = document.getElementById("pageSelect");
  const selectedPage = selectElement.value;

  if (selectedPage) {
    window.location.href = selectedPage;
  } else {
    alert("Please select a page to navigate to.");
  }
}
