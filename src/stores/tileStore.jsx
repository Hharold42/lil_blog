import { makeAutoObservable } from "mobx";

class TileStore {
  constructor() {
    makeAutoObservable(this);
  }

  tiles = [
    {
      title: "Я люблю пиццу",
      content:
        "Ea sit reprehenderit ut ex esse quis cupidatat nulla voluptate culpa laboris. Amet aliqua magna mollit ex cupidatat sit consectetur. Nostrud adipisicing ad labore ut consectetur enim velit cupidatat cillum consequat culpa do. Labore commodo cupidatat sit magna ea duis duis labore eu magna tempor. Fugiat culpa aliquip fugiat tempor enim ut consectetur minim. Officia commodo eu reprehenderit nisi elit id do minim esse cillum irure consectetur do.",
      rating: 1000,
    },
    {
      title: "Я люблю пиццу",
      content:
        "Ea sit reprehenderit ut ex esse quis cupidatat nulla voluptate culpa laboris. Amet aliqua magna mollit ex cupidatat sit consectetur. Nostrud adipisicing ad labore ut consectetur enim velit cupidatat cillum consequat culpa do. Labore commodo cupidatat sit magna ea duis duis labore eu magna tempor. Fugiat culpa aliquip fugiat tempor enim ut consectetur minim. Officia commodo eu reprehenderit nisi elit id do minim esse cillum irure consectetur do.",
      rating: 1020,
    },
    {
      title: "Я люблю пиццу",
      content:
        "Ea sit reprehenderit ut ex esse quis cupidatat nulla voluptate culpa laboris. Amet aliqua magna mollit ex cupidatat sit consectetur. Nostrud adipisicing ad labore ut consectetur enim velit cupidatat cillum consequat culpa do. Labore commodo cupidatat sit magna ea duis duis labore eu magna tempor. Fugiat culpa aliquip fugiat tempor enim ut consectetur minim. Officia commodo eu reprehenderit nisi elit id do minim esse cillum irure consectetur do.",
      rating: 1000,
    },
    {
      title: "Я люблю пиццу",
      content:
        "Ea sit reprehenderit ut ex esse quis cupidatat nulla voluptate culpa laboris. Amet aliqua magna mollit ex cupidatat sit consectetur. Nostrud adipisicing ad labore ut consectetur enim velit cupidatat cillum consequat culpa do. Labore commodo cupidatat sit magna ea duis duis labore eu magna tempor. Fugiat culpa aliquip fugiat tempor enim ut consectetur minim. Officia commodo eu reprehenderit nisi elit id do minim esse cillum irure consectetur do.",
      rating: 1000,
    },
    {
      title: "Я люблю пиццу",
      content:
        "Ea sit reprehenderit ut ex esse quis cupidatat nulla voluptate culpa laboris. Amet aliqua magna mollit ex cupidatat sit consectetur. Nostrud adipisicing ad labore ut consectetur enim velit cupidatat cillum consequat culpa do. Labore commodo cupidatat sit magna ea duis duis labore eu magna tempor. Fugiat culpa aliquip fugiat tempor enim ut consectetur minim. Officia commodo eu reprehenderit nisi elit id do minim esse cillum irure consectetur do.",
      rating: 1000,
    },
  ];

  addContent = (title, content) => {
    const newTile = { title: title, content: content, rating: 0 };

    this.tiles.unshift(newTile);
  };

  updateContent = (index, title, content) => {
    this.tiles[index] = {
      ...this.tiles[index],
      title: title,
      content: content,
    };
  };

  incrementRating = (index) => {
    this.tiles[index] = {
      ...this.tiles[index],
      rating: this.tiles[index].rating + 1,
    };
  };
}

const tiles1 = new TileStore();

export default tiles1;
