import React, { useState } from "react";
import Modal from "react-modal";
import "./Table.css";

Modal.setAppElement("#root");

const Table = () => {
  const [channels, setChannels] = useState([
    { name: "", count: "", prefix: "" },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [newName, setNewName] = useState("");
  const [newCount, setNewCount] = useState("");
  const [newPrefix, setNewPrefix] = useState("");

  const handleReset = (index) => {
    const newChannels = [...channels];
    newChannels[index].name = "";
    newChannels[index].count = "";
    newChannels[index].prefix = "";
    setChannels(newChannels);
  };

  const openModal = (index) => {
    setIsEditMode(true);
    setCurrentIndex(index);
    setNewName(channels[index].name);
    setNewCount(channels[index].count);
    setNewPrefix(channels[index].prefix);
    setModalIsOpen(true);
  };

  const openAddModal = () => {
    setIsEditMode(false);
    setNewName("");
    setNewCount("");
    setNewPrefix("");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentIndex(null);
    setNewName("");
    setNewCount("");
    setNewPrefix("");
  };

  const handleSave = () => {
    if (isEditMode) {
      const newChannels = [...channels];
      newChannels[currentIndex].name = newName;
      newChannels[currentIndex].count = newCount;
      newChannels[currentIndex].prefix = newPrefix;
      setChannels(newChannels);
    } else {
      setChannels([
        ...channels,
        { name: newName, count: newCount, prefix: newPrefix },
      ]);
    }
    closeModal();
  };

  return (
    <div className="TableContainer">
      <button onClick={openAddModal} className="add-button">
        + Add
      </button>
      <table className="channel-table">
        <thead>
          <tr>
            <th>Channel Name</th>
            <th>Current Count</th>
            <th>Prefix</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {channels.map((channel, index) => (
            <tr key={index}>
              <td>{channel.name}</td>
              <td>{channel.count}</td>
              <td>{channel.prefix}</td>
              <td>
                <button
                  onClick={() => handleReset(index)}
                  className="reset-button"
                >
                  Reset
                </button>
                <button
                  onClick={() => openModal(index)}
                  className="edit-button"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* ----- MODAL----- */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="Editmodal">
          {isEditMode ? "Edit Channel" : "Add"}
        </h2>
        <div className="modal-name">
          <label htmlFor="Channel-Name">Channel Name: </label>
          <br />
          <input
            className="input-name"
            name="Channel-Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="modal-current">
          <label htmlFor="Current Count">Current Count: </label>
          <br />
          <input
            className="input-current"
            type="number"
            value={newCount}
            onChange={(e) => setNewCount(e.target.value)}
          />
        </div>
        <div className="modal-prefix">
          <label htmlFor="Prefix">Prefix: </label>
          <br />
          <input
            className="input-prefix"
            type="text"
            value={newPrefix}
            onChange={(e) => setNewPrefix(e.target.value)}
          />
        </div>
        <div className="modal-buttons">
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={closeModal} className="cancel-button">
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Table;
