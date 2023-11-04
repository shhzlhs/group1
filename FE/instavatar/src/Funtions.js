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
export const formatDate = (inputDate) => {
  const date = new Date(inputDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = "00";
  const minutes = "00";
  const seconds = "00";

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
export const parseDateString = (dateString) => {
  const [datePart, timePart] = dateString.split(" ");

  const [day, month, year] = datePart.split("/").map(Number);
  const [hour, minute, second] = timePart.split(":").map(Number);

  const parsedDate = new Date(year, month - 1, day, hour, minute, second);

  return parsedDate;
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
export const getRandomElementsFromArray = (array, n) => {
  if (n >= array.length) {
    return array.slice();
  }

  const shuffled = array.slice();
  let i = array.length;
  while (i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled.slice(0, n);
};
export const getFirstTenCharacters = (inputString) => {
  return inputString.substring(0, 10);
};
