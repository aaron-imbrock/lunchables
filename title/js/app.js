let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
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
    newTitle.value = '';
  }
});
