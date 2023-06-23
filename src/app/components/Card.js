const Card = ({ link, title, body }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg p-1 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-600 via-violet-800 to-purple-600">
        <div className="block max-w-sm p-6 bg-teal-50 text-black border rounded-lg hover:bg-transparent hover:text-teal-50">
          <h5 className="mb-2 text-xl font-bold tracking-tight">{title}</h5>
          <p className="font-normal">{body}</p>
        </div>
      </div>
      <button className="relative inline-flex items-center justify-center text-sm font-medium group">
        <a
          href={link}
          className="-ml-4 relative py-2.5 hover:text-transparent hover:underline text-white duration-150 ease-out font-bold underline-offset-4 decoration-4 bg-clip-text hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-700 via-green-500 to-slate-200"
        >
          {"more >"}
        </a>
      </button>
    </div>
  );
};

export default Card;
