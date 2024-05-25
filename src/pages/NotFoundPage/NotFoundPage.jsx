import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  const errorURL = toast.error("Такой страницы нету");
  
  return (
    <div>
      <Toaster />
      <p>Пес, перейди обратно <Link to='/'>в будку! </Link></p>
    </div>
  );
}
