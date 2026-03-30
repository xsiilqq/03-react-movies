import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (topic: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleAction = (formData: FormData) => {
    const topic = formData.get("query") as string;

    if (!topic || topic.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(topic.trim());
  };

  return (
    <header className={css.header}>
      <form className={css.form} action={handleAction}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}