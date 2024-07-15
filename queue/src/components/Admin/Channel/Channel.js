import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "./Channel.css";

Modal.setAppElement("#root");

const Channel = () => {
  const [channels, setChannels] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(null);
  const [newName, setNewName] = useState("");
  const [newCount, setNewCount] = useState("");
  const [newPrefix, setNewPrefix] = useState("");
  const navigate = useNavigate();


  const handleRemoveFields = (index) => {
    const newChannels = channels.filter((_, i) => i !== index);
    setChannels(newChannels);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setChannels(result);
      } catch (err) {
        console.log(err.message);
      } 

    };

    fetchData();
  }, []);


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

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate("/");
  };

  return (
    <div>
      {/* -------------------- NAVBAR -------------------- */}
      <nav className="navbar-channel">
        <div className="navbar-titlechannel">Queue Management System</div>
      </nav>
      {/*-------------------- SIDEBAR -------------------- */}
      <div className="sidebar-channel">
        <ul>
          <li>
            <button
              className="channel-button"
              onClick={() => (window.location.href = "./channel")}
            >
              Channel
            </button>
          </li>
          <li>
            <button
              className="account-button"
              onClick={() => (window.location.href = "./account")}
            >
              Account
            </button>
          </li>
          <li> 
          <button 
          className="logout-button" 
          onClick={handleLogout}>
          Logout
        </button>
          </li>
        </ul>
      </div>
      {/*-------------------- TABLE --------------------*/}
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
                    onClick={() => handleRemoveFields(index)}
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

        
        {/* -------------------- MODAL -------------------- */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <h2 className="Editmodal">
            {isEditMode ? "Edit Channel" : "Add Channel"}
          </h2>
          <div className="modal-name">
            <label htmlFor="Channel-Name">Channel Name: </label>
            <br />
            <input
              className="input-name"
              name="Channel-Name"
              value={newName}ss
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          {isEditMode && (
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
          )}
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
    </div>
  );
};

export default Channel;
