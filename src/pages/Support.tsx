import { useState } from "react";
import Modal from "../components/support/Modal";
import Ticket from "../components/support/Ticket";

export default function Support() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if(!firstName) {
      setModalMessage("First Name is required.");
      setShowModal(true);
      return;
    }

    if(!lastName) {
      setModalMessage("Last Name is required.");
      setShowModal(true);
      return;
    }

    if(!email) {
      setModalMessage("Email is required.");
      setShowModal(true);
      return;
    }

    if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setModalMessage("Invalid email address.");
      setShowModal(true);
      return;
    }

    if(!selectedTopic) {
      setModalMessage("Please select a topic.");
      setShowModal(true);
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <main className="bg-black w-full min-h-screen text-white flex justify-center items-center p-10">
      <div className="max-w-[60rem] flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-medium">Support Ticket Form</h1>
          <div className="w-full h-[1px] bg-gray-500"></div>
        </div>
        <div className="w-full">
          {!isSubmitted ? (
            <div className="grid grid-cols-2 w-full gap-6 items-start md:grid-cols-1 md:grid-rows-2">
              <div className="flex flex-col gap-y-6 h-full">
                <div className="flex flex-col gap-2">
                  <h2>
                    Name <span className="text-red-500">*</span>
                  </h2>
                  <div className="flex gap-5">
                    <div className="flex-1">
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full rounded-md border border-gray-300 bg-transparent focus:outline-none focus:border-yellow-600 p-2 text-lg"
                        type="text"
                        placeholder=""
                      />
                      <h4 className="text-lg text-gray-400">First</h4>
                    </div>
                    <div className="flex-1">
                      <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full rounded-md border border-gray-300 bg-transparent focus:outline-none focus:border-yellow-600 p-2 text-lg"
                        type="text"
                        placeholder=""
                      />
                      <h4 className="text-lg text-gray-400">Last</h4>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2>
                    Email <span className="text-red-500">*</span>
                  </h2>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-gray-300 bg-transparent focus:outline-none focus:border-yellow-600 p-2"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-lg font-semibold">
                    Topic <span className="text-red-500">*</span>
                  </h2>
                  <div className="flex flex-col gap-2 border-dotted border-gray-300 border-2 p-4 rounded-md text-sm">
                    <h3 className="mb-2 font-medium">What can we help you with today?</h3>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="general"
                        name="options"
                        value="General"
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="w-2 aspect-square cursor-pointer accent-yellow-500"
                      />
                      <label htmlFor="general" className="cursor-pointer">
                        General
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="bug"
                        name="options"
                        value="Bug"
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="w-2 aspect-square cursor-pointer accent-yellow-500"
                      />
                      <label htmlFor="bug" className="cursor-pointer">
                        Bug
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 h-full md:mt-3">
                <div className="relative w-full inline-block">
                  <span className="text-base font-medium relative inline-block">
                    Description
                    <h3 className="absolute -top-2 -right-14 text-sm text-gray-500">optional</h3>
                  </span>
                </div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-full w-full p-3 rounded-md bg-transparent border border-gray-300 focus:outline-none focus:border-yellow-600 resize-none"
                  placeholder="Description Report"
                ></textarea>
              </div>
            </div>
          ) : (
            <Ticket />
          )}

          {!isSubmitted && (
            <div className="w-full flex justify-end mt-5">
              <button
                className="bg-orange-400 font-medium rounded-2xl px-6 py-2 text-xl hover:opacity-80 active:opacity-70"
                onClick={handleSubmit}>
                SEND
              </button>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <Modal message={modalMessage} onClose={() => setShowModal(false)} />
      )}
    </main>
  );
}
