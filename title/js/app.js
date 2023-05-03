let loginForm = document.getElementById("loginForm");
const defaultURL = 'https://aaron-imbrock.github.io/lunchables/title/index.html';
const windowFeatures = '_blank';

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let newTitle = document.getElementById("new_title");

  if (newTitle.value === '') {
    alert("Ensure you input a value!");
  } else {
    // perform operation with form input
    console.log(
      `New Title is: ${newTitle.value}`
    );
    document.title = newTitle.value;
    window.open(defaultURL, windowFeatures);
    newTitle.value = '';
  }
});
