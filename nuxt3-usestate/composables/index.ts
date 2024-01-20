import type { Ref } from "vue";

type TitleState = {
  title: Readonly<Ref<string>>;
  changeTitle: (value: string) => void;
};

export const useTitle = (): TitleState => {
  const title = useState<string>("title", () => "Hello World!");
  const changeTitle = (title: Ref<string>) => (value: string) => {
    title.value = value;
  };

  return {
    title: readonly(title),
    changeTitle: changeTitle(title),
  };
};
