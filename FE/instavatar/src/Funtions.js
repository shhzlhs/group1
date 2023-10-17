export const formatRelativeTime = (timestamp) => {
  const now = new Date();
  const timeDifference = now - timestamp;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) {
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
