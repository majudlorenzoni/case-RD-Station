import React from 'react';

function SubmitButton({ text }) {
  return (
    <div className="bg-gray-100 flex justify-center mt-6">
      <button
        type="submit"
        className="font-agdasima bg-blue-500 hover:bg-blue-700 text-black font-bold py-4 px-8 text-2xl rounded-lg"
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
