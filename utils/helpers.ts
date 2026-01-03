
export const calculateAge = (): number => {
  // Born June 30, 2004 (month is 0-indexed, so 5 is June)
  const birthDate = new Date(2004, 5, 30);
  const today = new Date();
  return Math.floor((today.getTime() - birthDate.getTime()) / 31557600000);
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num.toString();
};

export const fetchSocialStats = async () => {
  // Simulating a fetch from july.bio/bruhliver
  // In a real environment, this would hit an API or a serverless function that scrapes.
  return new Promise<{ instagram: number; tiktok: number; youtube: number }>((resolve) => {
    setTimeout(() => {
      resolve({
        instagram: 54200,
        tiktok: 228900,
        youtube: 156000
      });
    }, 500);
  });
};
