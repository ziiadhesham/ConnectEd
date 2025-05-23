const posts = [
  {
    id: 1,
    userId: 1,
    time: "10:45 AM",
    content: "Just launched a new UI kit 🔥 Check it out!",
    image: "https://picsum.photos/seed/1/600/400",
    comments: [
      {
        userId: 13,
        time: "11:00 AM",
        text: "This is amazing 🔥",
      },
    ],
    likes: [13, 32],
    likesCount: 2,
    reposts: [27],
    repostsCount: 1,
    bookmarks: [7],
    bookmarksCount: 1,
  },
  {
    id: 2,
    userId: 2,
    time: "2:30 PM",
    content: "Check out my latest coding vlog.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    comments: [
      {
        userId: 13,
        time: "11:00 AM",
        text: "This is amazing 🔥",
      },
    ],
    likes: [19],
    likesCount: 1,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 3,
    userId: 3,
    time: "3:15 PM",
    content: "New blog post is up! 🚀",
    image: "https://picsum.photos/seed/2/600/400",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 4,
    userId: 4,
    time: "4:45 PM",
    content: "Working on a React project!",
    video: "https://www.w3schools.com/html/movie.mp4",
    likes: [23, 29],
    likesCount: 2,
    reposts: [35],
    repostsCount: 1,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 5,
    userId: 5,
    time: "5:20 PM",
    content: "Photography vibes 📸",
    image: "https://picsum.photos/seed/3/600/400",
    likes: [29],
    likesCount: 1,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 6,
    userId: 6,
    time: "6:10 PM",
    content: "You can't see me! 🕶️",
    image: "https://picsum.photos/seed/4/600/400",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 7,
    userId: 7,
    time: "7:00 PM",
    content: "Launching soon 🚀",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: [32, 13],
    likesCount: 2,
    reposts: [27],
    repostsCount: 1,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 8,
    userId: 8,
    time: "8:30 PM",
    content: "Debugging all day 😵‍💫",
    image: "https://picsum.photos/seed/5/600/400",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 9,
    userId: 9,
    time: "9:45 PM",
    content: "Responsive design tips 🧠",
    video: "https://www.w3schools.com/html/movie.mp4",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 10,
    userId: 10,
    time: "10:15 PM",
    content: "Frontend magic ✨",
    image: "https://picsum.photos/seed/6/600/400",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 11,
    userId: 11,
    time: "11:00 PM",
    content: "Creating an innovative product! 🛠️",
    image: "https://picsum.photos/seed/7/600/400",
    likes: [13],
    likesCount: 1,
    reposts: [7],
    repostsCount: 1,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 12,
    userId: 12,
    time: "12:30 AM",
    content: "Life lessons learned through yoga 🙏",
    image: "https://picsum.photos/seed/8/600/400",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 13,
    userId: 13,
    time: "1:00 AM",
    content: "Excited about the future of tech 🚀",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 14,
    userId: 14,
    time: "2:00 AM",
    content: "Environment conservation is crucial 🌱",
    image: "https://picsum.photos/seed/9/600/400",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 15,
    userId: 15,
    time: "3:00 AM",
    content: "Building my first game! 🎮",
    image: "https://picsum.photos/seed/10/600/400",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 16,
    userId: 16,
    time: "4:00 AM",
    content: "Python + Flask = 🔥",
    image: "https://picsum.photos/seed/11/600/400",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 17,
    userId: 17,
    time: "5:00 AM",
    content: "Designing a new app interface 🖌️",
    video: "https://www.w3schools.com/html/movie.mp4",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 18,
    userId: 18,
    time: "6:00 AM",
    content: "Brainstorming ideas for my next project 💡",
    image: "https://picsum.photos/seed/12/600/400",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 19,
    userId: 19,
    time: "7:00 AM",
    content: "The future of AI is now! 🤖",
    image: "https://picsum.photos/seed/13/600/400",
    likes: [],
    likesCount: 0,
    reposts: [],  
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
  {
    id: 20,
    userId: 20,
    time: "8:00 AM",
    content: "Exploring the world of machine learning 🔍",
    image: "https://picsum.photos/seed/14/600/400",
    likes: [],
    likesCount: 0,
    reposts: [],
    repostsCount: 0,
    bookmarks: [],
    bookmarksCount: 0,
  },
];

export default posts;
