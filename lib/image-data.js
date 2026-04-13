const photos = [
  {
    id: "94a7e01b-8576-4d18-8b84-6ae588db02d9",
    title: "Ocean View",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tags: ["nature", "river", "ocean"],
    views: "10M",
    share: "4.56M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=53",
      name: "Alex B",
      bio: "I am a portrait photographer in Michigan...",
      followers: 220
    },
    likes: 100
  },
  {
    id: "de05d078-6f6d-4272-a08f-5a805a23aba4",
    title: "Mountain Peak",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tags: ["nature", "mountain"],
    views: "8M",
    share: "3M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=54",
      name: "Brian Xelo",
      bio: "Nature photographer",
      followers: 220
    },
    likes: 90
  },
  {
    id: "8265198d-e2e1-4221-addc-8244f39fdd62",
    title: "Forest Path",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    tags: ["forest", "green"],
    views: "6M",
    share: "2M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=55",
      name: "Ceza Des",
      bio: "Forest explorer",
      followers: 180
    },
    likes: 85
  },
  {
    id: "6cf6c10d-8ba8-46d7-b246-0e1fd5e270df",
    title: "Golden Sunset",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    tags: ["sunset", "sky"],
    views: "9M",
    share: "3.5M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=56",
      name: "Karim Bulletin",
      bio: "Sunset lover",
      followers: 200
    },
    likes: 95
  },
  {
    id: "a7f14fb2-9b2d-43bb-98af-6c70158e9c55",
    title: "Calm Lake",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    tags: ["flower", "nature"],
    views: "5M",
    share: "2M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=57",
      name: "Madan PA",
      bio: "Flower photographer",
      followers: 120
    },
    likes: 80
  },
  {
    id: "6bea51c4-1123-425f-90c9-9148724872e5",
    title: "Green Hills",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tags: ["lake", "reflection"],
    views: "7M",
    share: "2.8M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=58",
      name: "Moina Lam",
      bio: "Landscape artist",
      followers: 220
    },
    likes: 100
  },
  {
    id: "02983ddd-338d-4382-b0c8-316caa21b4a5",
    title: "River Flow",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tags: ["ocean", "wind"],
    views: "10M",
    share: "4M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=59",
      name: "Nat B",
      bio: "Ocean vibes",
      followers: 210
    },
    likes: 100
  },
  {
    id: "552f7d8d-d9eb-4edc-98a9-cec20c90d90c",
    title: "Snow Mountains",
    url: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084",
    tags: ["hills", "green"],
    views: "9M",
    share: "3.5M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=60",
      name: "Taral X",
      bio: "Hill explorer",
      followers: 220
    },
    likes: 100
  },
  {
    id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
    title: "Blue Sky",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    tags: ["river"],
    views: "8M",
    share: "3M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=61",
      name: "Zhoom B",
      bio: "River life",
      followers: 220
    },
    likes: 100
  },
  {
    id: "9761a3ea-2c2c-4b6e-a618-a6e4d26cf729",
    title: "Desert Dunes",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    tags: ["morning"],
    views: "7M",
    share: "2.5M",
    uploaded: "2024-01-31",
    author: {
      avatar: "https://i.pravatar.cc/150?img=62",
      name: "T Manhattan",
      bio: "Morning vibes",
      followers: 220
    },
    likes: 100
  }
];

const getAllPhotos = () => {
  return photos.map(photo => ({
    id: photo.id,
    title: photo.title,
    url: photo.url
  }));
};

const getPhotoById = (id) => {
  return photos.find(photo => photo.id === id);
};

export {
  getAllPhotos,
  getPhotoById
}