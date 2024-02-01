import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

export const defaultTitle = "Work Items";

export default function EditPost({ targetId }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    
    // Update document title
    document.title = formJson.postTitle;

    // Update content in the specified targetId div
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetRoot = ReactDOM.createRoot(targetElement);
      targetRoot.render(
        <React.StrictMode>
          <div>
            {formJson.postTitle}
          </div>
        </React.StrictMode>
      );
    }
  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          <input name="postTitle" defaultValue={ defaultTitle } />
        </label>
        <button type="submit">Update this Tab</button>
      </form>
    </>
  );
}