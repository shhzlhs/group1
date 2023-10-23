export const formatRelativeTime = (timestamp) => {
  const now = new Date();
  const timeDifference = now - timestamp;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} năm trước`;
  } else if (months > 0) {
    return `${months} tháng trước`;
  } else if (weeks > 0) {
    return `${weeks} tuần trước`;
  } else if (days > 0) {
    return `${days} ngày trước`;
  } else if (hours > 0) {
    return `${hours} giờ trước`;
  } else if (minutes > 0) {
    return `${minutes} phút trước`;
  } else {
    return "Vừa xong";
  }
};
export const parseDateString = (dateString) => {
  const parts = dateString.split(/[\s\/:]/);

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1] - 1, 10);
  const year = parseInt(parts[2], 10);
  const hours = parseInt(parts[3], 10);
  const minutes = parseInt(parts[4], 10);
  const seconds = parseInt(parts[5], 10);

  return new Date(year, month, day, hours, minutes, seconds);
};
export const selectItemsFromIndex = (array, startIndex, number) => {
  if (!Array.isArray(array) || startIndex < 0) {
    return [];
  }

  const selectedItems = array.slice(startIndex, startIndex + number);

  return selectedItems;
};
export const getRandomElementFromArray = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
};
export const getCommonElements = (arr1, arr2) => {
  return arr1.filter((element) => arr2.includes(element));
};
