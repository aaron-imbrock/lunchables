// import logo from './logo.svg';
import './App.css';
import { createRoot } from 'react-dom/client'; 
import { useState } from 'react';

export const defaultTitle = "Lunchables";
export const time = createRoot(document.getElementById('time'));

export default function EditPost() {
  const title = useState(0);
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);
    document.title = formJson.postTitle;
  }

  return (
    <>
    <h1>Update Title</h1>
    <form method="post" onSubmit={handleSubmit}>
      <label>
        New title: <input name="postTitle" defaultValue={ defaultTitle } />
      </label>
      <button type="submit">Update This Tab</button>
      <button type="submit">Create New Tab</button>
    </form>
    </>
  );
}

function clock() {
  const element = (
    <div>
      <h4>Browser Time: {new Date().toLocaleTimeString()}</h4>
      <h4>UTC: {new Date().toUTCString()}</h4>
    </div>
  );
  time.render(element);
}

setInterval(clock, 1000);