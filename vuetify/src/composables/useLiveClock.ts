import { onMounted, onUnmounted, ref } from 'vue';

export const useLiveClock = (timezone: string) => {
  const currentTime = ref('');
  let intervalId: number | null = null;

  const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    currentTime.value = timeString;
  };

  onMounted(() => {
    updateTime(); // Initial time
    intervalId = window.setInterval(updateTime, 1000);
  });

  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });

  return {
    currentTime,
  };
};
