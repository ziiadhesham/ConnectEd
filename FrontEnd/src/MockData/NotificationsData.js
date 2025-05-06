// mockData/notifications.js
const notifications = [
  { id: 1, type: "comment", senderId: 4, receiverId: 1, time: 1, text: "Nice post!" },
  { id: 2, type: "repost", senderId: 6, receiverId: 1, time: 2 },
  { id: 3, type: "like", senderId: 2, receiverId: 1, time: 3 },
  { id: 4, type: "comment", senderId: 7, receiverId: 1, time: 4, text: "Loved this!" },
  { id: 5, type: "like", senderId: 8, receiverId: 3, time: 5 },
  { id: 6, type: "repost", senderId: 9, receiverId: 1, time: 6 },
  { id: 7, type: "follow", senderId: 10, receiverId: 2, time: 7 },
  { id: 8, type: "follow", senderId: 11, receiverId: 6, time: 8 },
  { id: 9, type: "comment", senderId: 12, receiverId: 7, time: 9, text: "Keep it up!" },
  { id: 10, type: "like", senderId: 13, receiverId: 4, time: 10 },

  { id: 11, type: "repost", senderId: 14, receiverId: 8, time: 11 },
  { id: 12, type: "comment", senderId: 15, receiverId: 9, time: 12, text: "Wow, amazing!" },
  { id: 13, type: "like", senderId: 16, receiverId: 10, time: 13 },
  { id: 14, type: "follow", senderId: 17, receiverId: 12, time: 14 },
  { id: 15, type: "comment", senderId: 18, receiverId: 13, time: 15, text: "I agree!" },
  { id: 16, type: "repost", senderId: 19, receiverId: 14, time: 16 },
  { id: 17, type: "like", senderId: 5, receiverId: 15, time: 17 },
  { id: 18, type: "follow", senderId: 3, receiverId: 16, time: 18 },
  { id: 19, type: "comment", senderId: 2, receiverId: 17, time: 19, text: "Nice article!" },
  { id: 20, type: "like", senderId: 1, receiverId: 18, time: 20 },

  { id: 21, type: "repost", senderId: 4, receiverId: 5, time: 21 },
  { id: 22, type: "comment", senderId: 6, receiverId: 8, time: 22, text: "Good work!" },
  { id: 23, type: "like", senderId: 7, receiverId: 10, time: 23 },
  { id: 24, type: "follow", senderId: 8, receiverId: 11, time: 24 },
  { id: 25, type: "comment", senderId: 9, receiverId: 13, time: 25, text: "Interesting thought!" },
  { id: 26, type: "like", senderId: 10, receiverId: 14, time: 26 },
  { id: 27, type: "repost", senderId: 11, receiverId: 15, time: 27 },
  { id: 28, type: "follow", senderId: 12, receiverId: 16, time: 28 },
  { id: 29, type: "comment", senderId: 13, receiverId: 17, time: 29, text: "Awesome!" },
  { id: 30, type: "like", senderId: 14, receiverId: 18, time: 30 },
];

export default notifications;
