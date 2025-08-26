import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createEntry(notes) {
  return <Note key={notes.id} title={notes.title} content={notes.content} />;
}

function App() {
  return (
    <div>
      <Header />

      <dl>{notes.map(createEntry)}</dl>

      <Footer />
    </div>
  );
}

export default App;
