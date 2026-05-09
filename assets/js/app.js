function getSelectedChoices() {
  return Array.from(document.querySelectorAll('input[type="radio"]:checked'))
    .map((choice) => `${choice.name}: ${choice.value}`);
}

function emailChoices() {
  const body = encodeURIComponent(getSelectedChoices().join("\n"));
  window.location.href = `mailto:?subject=Jordan Trip Choices&body=${body}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("email-choices")?.addEventListener("click", emailChoices);
});
