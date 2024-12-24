export const  timeAgo=(dateString:string) => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInSeconds / 3600);
  const diffInDays = Math.floor(diffInSeconds / 86400);
  const diffInWeeks = Math.floor(diffInDays / 7);

  if (diffInSeconds < 60) {
    return "Just now";
  } else if (diffInMinutes < 60) {
    return  `${diffInMinutes}m`;
  } else if (diffInHours < 24) {
    return  `${diffInHours}h`;
  } else if (diffInDays < 7) {
    return  `${diffInDays}d`;
  } else {
    return `${diffInWeeks}w`;
  }
};