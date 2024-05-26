import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const notify = () => toast("Write something, please!");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value;
    if (form.elements.search.value.trim() === "") {
      return notify();
    }
    onSearch(search);
    form.reset();
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};


export default SearchBar;
