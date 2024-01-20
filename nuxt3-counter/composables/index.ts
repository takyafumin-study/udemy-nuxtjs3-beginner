import type { Ref } from "vue";
export const useCounterState = () => {
  const count = useState<number>("counter", () => 0);
  return {
    counter: readonly(count),
    countUp: countUp(count),
    countDown: countDown(count),
    reset: reset(count),
  };
};

const countUp = (count: Ref<number>) => () => count.value++;
const countDown = (count: Ref<number>) => () => {
  if (count.value <= 0) {
    return;
  }
  count.value--;
};
const reset = (count: Ref<number>) => () => (count.value = 0);
