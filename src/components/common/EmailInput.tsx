const EmailInput = () => {
  return (
    <div id="join" className="flex flex-row gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="border border-gray-300 rounded-md px-4 py-2"
      />
      <button className="bg-black text-white px-4 py-2 rounded-md">
        Join Waitlist
      </button>
    </div>
  );
};

export default EmailInput;

