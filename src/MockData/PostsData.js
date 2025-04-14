// This file contains mock posts data used across the app
// Each post can have an image or a video and optionally an array of comments

const posts = [
  {
    id: "1",
    username: "Kohaku",
    time: "10:45 AM",
    avatar: "https://i.pravatar.cc/300?img=11",
    content: "Just launched a new UI kit 🔥 Check it out!",
    image: "https://picsum.photos/seed/1/600/400", // Post includes an image
    comments: [
      {
        user: {
          name: "Brandi",
          avatar: "https://i.pravatar.cc/150?img=13",
        },
        time: "11:00 AM",
        text: "This is amazing 🔥", // Comment text
      },
    ],
  },
  {
    id: "2",
    username: "Mohamed Shawky",
    time: "2:30 PM",
    avatar: "https://i.pravatar.cc/300?img=60",
    content: "Check out my latest coding vlog.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    comments: [
      {
        user: {
          name: "Brandi",
          avatar: "https://i.pravatar.cc/150?img=13",
        },
        time: "11:00 AM",
        text: "This is amazing 🔥", // Comment text
      },
      {
        user: {
          name: "Brandi",
          avatar: "https://i.pravatar.cc/150?img=13",
        },
        time: "11:00 AM",
        text: "This is amazing 🔥", // Comment text
      },
    ], // Post includes a video
  },
  {
    id: "3",
    username: "Lina Tran",
    time: "3:15 PM",
    avatar: "https://i.pravatar.cc/300?img=32",
    content: "New blog post is up! 🚀",
    image: "https://picsum.photos/seed/2/600/400", // Post with image
  },
  {
    id: "4",
    username: "Ahmed Zaki",
    time: "4:45 PM",
    avatar: "https://i.pravatar.cc/300?img=27",
    content: "Working on a React project!",
    video: "https://www.w3schools.com/html/movie.mp4", // Post with video
  },
  {
    id: "5",
    username: "Emilia Clark",
    time: "5:20 PM",
    avatar: "https://i.pravatar.cc/300?img=17",
    content: "Photography vibes 📸",
    image: "https://picsum.photos/seed/3/600/400",
  },
  {
    id: "6",
    username: "John Cena",
    time: "6:10 PM",
    avatar: "https://i.pravatar.cc/300?img=7",
    content: "You can't see me! 🕶️",
    image: "https://picsum.photos/seed/4/600/400",
  },
  {
    id: "7",
    username: "Amira Said",
    time: "7:00 PM",
    avatar: "https://i.pravatar.cc/300?img=19",
    content: "Launching soon 🚀",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "8",
    username: "Techie Boy",
    time: "8:30 PM",
    avatar: "https://i.pravatar.cc/300?img=23",
    content: "Debugging all day 😵‍💫",
    image: "https://picsum.photos/seed/5/600/400",
  },
  {
    id: "9",
    username: "Sara Dev",
    time: "9:45 PM",
    avatar: "https://i.pravatar.cc/300?img=29",
    content: "Responsive design tips 🧠",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: "10",
    username: "CodeQueen",
    time: "10:15 PM",
    avatar: "https://i.pravatar.cc/300?img=35",
    content: "Frontend magic ✨",
    image: "https://picsum.photos/seed/6/600/400",
  },
];

export default posts;
