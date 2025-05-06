import React, { useState } from "react";
import { InputBase, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


const emojiList = [
  // Happy w Joy
  { emoji: "😃", tags: ["happy", "smile", "joy"] },
  { emoji: "😄", tags: ["grin", "smile", "happy"] },
  { emoji: "😁", tags: ["happy", "grin", "teeth"] },
  { emoji: "😆", tags: ["laugh", "funny", "happy"] },
  { emoji: "😂", tags: ["laugh", "tears", "funny"] },
  { emoji: "🤣", tags: ["rofl", "laugh", "funny"] },
  { emoji: "😊", tags: ["blush", "happy", "shy"] },
  { emoji: "😇", tags: ["angel", "good", "innocent"] },
  { emoji: "😍", tags: ["love", "heart", "crush"] },
  { emoji: "😎", tags: ["cool", "sunglasses", "chill"] },

  // Sad w Emotional
  { emoji: "😢", tags: ["sad", "cry", "tear"] },
  { emoji: "😭", tags: ["cry", "sad", "emotional"] },
  { emoji: "😞", tags: ["disappointed", "sad", "down"] },
  { emoji: "😔", tags: ["pensive", "sad", "thinking"] },
  { emoji: "🥺", tags: ["pleading", "sad", "cute"] },
  { emoji: "😩", tags: ["tired", "sad", "worn out"] },
  { emoji: "😖", tags: ["frustrated", "sad", "struggle"] },

  // Angry w Frustrated
  { emoji: "😠", tags: ["angry", "mad", "upset"] },
  { emoji: "😡", tags: ["rage", "furious", "angry"] },
  { emoji: "🤬", tags: ["cursing", "angry", "mad"] },
  { emoji: "😤", tags: ["steam", "frustrated", "grumpy"] },

  // Surprised w Shocked
  { emoji: "😱", tags: ["shock", "scared", "surprise"] },
  { emoji: "😳", tags: ["blush", "surprise", "awkward"] },
  { emoji: "😮", tags: ["surprised", "wow", "open mouth"] },
  { emoji: "😯", tags: ["surprise", "silent", "hushed"] },
  { emoji: "😲", tags: ["shock", "amazed", "jaw drop"] },

  // Love w Affection
  { emoji: "🥰", tags: ["love", "heart", "blush"] },
  { emoji: "😘", tags: ["kiss", "love", "flirt"] },
  { emoji: "😗", tags: ["kiss", "simple", "affection"] },
  { emoji: "😚", tags: ["kiss", "closed eyes", "cute"] },
  { emoji: "😙", tags: ["kiss", "smile", "love"] },

  // Misc w Fun
  { emoji: "🤪", tags: ["crazy", "fun", "wild"] },
  { emoji: "🤓", tags: ["nerd", "geek", "glasses"] },
  { emoji: "😜", tags: ["wink", "funny", "playful"] },
  { emoji: "😛", tags: ["tongue", "silly", "funny"] },
  { emoji: "🤑", tags: ["money", "rich", "dollar"] },
  { emoji: "🤗", tags: ["hug", "comfort", "warm"] },
  { emoji: "😴", tags: ["sleep", "tired", "zzz"] },
];


export const InserEmojies = ({ className }) => {
  const [search, setSearch] = useState("");

  const filteredEmojis = emojiList.filter(({ tags }) =>
    tags.some((tag) => tag.includes(search.toLowerCase()))
  );

  return (
    <Box
      className={className}
      sx={{
        background: "#2c2c2e",
        borderRadius: 4,
        padding: 2,
        width: 320,
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#3a3a3c",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 1,
          mb: 2,
        }}
      >
        <SearchIcon sx={{ color: "#888", mr: 1 }} />
        <InputBase
          placeholder="Search emoji..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ color: "#fff", flex: 1 }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 1.5,
          justifyItems: "center",
        }}
      >
        {filteredEmojis.map(({ emoji }, idx) => (
          <Typography key={idx} fontSize={24}>
            {emoji}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default InserEmojies;