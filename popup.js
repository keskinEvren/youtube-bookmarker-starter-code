import { getCurrentTab } from "./utils.js";
// adding a new bookmark row to the popup
const addNewBookmark = () => {};

const viewBookmarks = (currentBookmarks = []) => {
  const bookmarkElement = document.getElementsById("bookmarks");
  bookmarkElement.innerHTML = "";

  if (currentBookmarks.length > 0) {
    for (let i = 0; i < currentBookmarks.length; i++) {
      const bookmark = currentBookmarks[i];
      addNewBookmark(bookmarksElement, bookmark);
    }
  } else {
    bookmarksElement.innerHTML = '<i class="row">No bookmarks to show</i>';
  }
};

const onPlay = (e) => {};

const onDelete = (e) => {};

const setBookmarkAttributes = () => {};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();
  const urlParameters = new URLSearchParams(queryParameters);

  const currentVideo = urlParameters.get("v");

  if (activeTab.url.includes("youtube/watch") && currentVideo) {
    chrome.storage.sync.get([CurrentVideo], (data) => {
      const currentVideoBookmarks = data[currentVideo]
        ? JSON.parse(data[currentVideo])
        : [];

      //viewBookmarks
    });
  } else {
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML =
      '<div class="title">This is not a youtube video page. </div>';
  }
});
