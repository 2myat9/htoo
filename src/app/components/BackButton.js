import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="flex justify-start">
      <button
        onClick={() => {
          router.push("/");
        }}
        className="relative inline-flex items-center justify-center text-sm font-medium group"
      >
        <span className="-ml-4 relative py-2.5 hover:text-transparent hover:underline text-white duration-150 ease-out font-bold underline-offset-4 decoration-4 bg-clip-text hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-700 via-green-500 to-slate-200">
          {"< Back"}
        </span>
      </button>
    </div>
  );
};

export default BackButton;
