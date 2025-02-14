import { green } from "react-native-reanimated/lib/typescript/Colors";

const getRandomImage = () => `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;

export const postsData = [
  {
    id: "post1",
    fullname:"Anwar Baig",
    image: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
    postImageArray: [getRandomImage()],
    description: "🏔️ Exploring the mountains!",
    likes: 320,
    comments: [
      { username: "hiker_123", comment: "Wow! Where is this? 😍" },
      { username: "travellover", comment: "Absolutely stunning view!" }
    ],
    postedAt: "2 hours ago",
  },
  {
    id: "post2",
    fullname:"Nadeem Baig",
    image: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
    postImageArray: [getRandomImage(),getRandomImage()],
    description: "🌅 Sunset by the beach with a cool breeze!",
    likes: 450,
    comments: [
      { username: "oceanlover", comment: "This is so calming! 🏖️" },
      { username: "photofan", comment: "Your photography is amazing!" }
    ],
    postedAt: "Yesterday",
  },
  {
    id: "post3",
    fullname:"Jaihind Yadav",
    image: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
    postImageArray: [getRandomImage(),getRandomImage(),getRandomImage()],
    description: "🌆 City lights at night, the magic of urban life!",
    likes: 275,
    comments: [{ username: "cityexplorer", comment: "Love this vibe!" }],
    postedAt: "3 days ago",
  },
  {
    id: "post4",
    fullname:"Umar Baig",
    image: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
    postImageArray: [getRandomImage(),getRandomImage(),getRandomImage()],
    description: "🌳 Hiking through the forest, fresh air and greenery!",
    likes: 180,
    comments: [
      { username: "nature_lover", comment: "Nature is the best therapy! 🍃" },
      { username: "wildlife_fan", comment: "Did you spot any animals? 🦌" }
    ],
    postedAt: "5 days ago",
  },
  {
    id: "post5",
    fullname:"Jigar yadav",
    image: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
    postImageArray: [getRandomImage(),getRandomImage(),getRandomImage(),getRandomImage() ],
    description: "🍕 Delicious homemade pizza night! Who wants a bite? 😋",
    likes: 530,
    comments: [
      { username: "foodie101", comment: "Omg! That looks so tasty! 🤤" },
      { username: "chef_master", comment: "Recipe share karo! 😍" }
    ],
    postedAt: "1 week ago",
  },
  {
    id: "post6",
    fullname:"Anwar Baig",
    image: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
    postImageArray: [getRandomImage(),getRandomImage(),getRandomImage(),getRandomImage(),getRandomImage() ],

    description: "🎶 Live concert night, music, and good vibes! 🎸",
    likes: 620,
    comments: [
      { username: "music_fan", comment: "Which band was playing? 🔥" },
      { username: "concert_lover", comment: "Wish I was there! 🎤" }
    ],
    postedAt: "2 weeks ago",
  },
  {
    id: "post7",
    fullname:"Umesh Dubey",
    image: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
    postImageArray: [getRandomImage(),getRandomImage(),getRandomImage(),getRandomImage() ],
    description: "✈️ Flying over the clouds, a breathtaking view! ☁️",
    likes: 750,
    comments: [
      { username: "pilot_enthusiast", comment: "I love aerial shots! ✈️" },
      { username: "sky_gazer", comment: "Looks so peaceful up there! ☁️" }
    ],
    postedAt: "3 weeks ago",
  }
];
