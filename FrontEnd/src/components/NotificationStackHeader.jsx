import React, { useState, useEffect } from "react";
import NotificationContainer from "./NotificationContainer";
import NavNotification from "./NavNotification";
import useUserStore from "../Stores/UseUserStore";
import axiosInstance from "../config/axiosInstance";

const NotificationStackHeader = ({ notifications }) => {
  const [currentTab, setCurrentTab] = useState("tab1");
  const { userId } = useUserStore();
  const [senders, setSenders] = useState({});

  useEffect(() => {
    const fetchSenders = async () => {
      const senderIds = [...new Set(notifications.map((n) => n.senderId))].filter(Boolean);

      const sendersMap = {};
      for (const id of senderIds) {
        try {
          const res = await axiosInstance.get(`/users/${id}`); // change if your API differs
          sendersMap[id] = res.data;
          console.log("Sender fetched:", res.data);
        } catch (error) {
          console.error(`Error fetching sender with id ${id}:`, error);
        }
      }
      setSenders(sendersMap);
    };

    if (notifications.length) {
      fetchSenders();
    }
  }, [notifications]);

  const labels = [
    { key: "tab1", text: "All" },
    { key: "tab2", text: "Likes" },
    { key: "tab3", text: "Reposts" },
    { key: "tab4", text: "Follows" },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    if (notification.receiverId !== userId) return false;
    if (currentTab === "tab1") return true;
    if (currentTab === "tab2") return notification.type === "like";
    if (currentTab === "tab3") return notification.type === "repost";
    if (currentTab === "tab4") return notification.type === "follow";
    return false;
  });

  return (
    <div style={{ width: "100%", backgroundColor: "transparent" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          color: "rgba(248, 248, 248, 0.7)",
        }}
      >
        <h1>Notifications</h1>
        <svg
          style={{ width: "24px", height: "24px", opacity: 0.7 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#f8f8f8"
            d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
          />
        </svg>
      </div>

      <div style={{ display: "flex" }}>
        <NavNotification tab={currentTab} handleTabChange={setCurrentTab} labels={labels} />
      </div>

      {filteredNotifications
        .sort((a, b) => new Date(b.time) - new Date(a.time))
        .map((notification) => (
          <NotificationContainer
            key={notification._id}
            notification={notification}
            sender={senders[notification.senderId]}
          />
        ))}
    </div>
  );
};

export default NotificationStackHeader;
