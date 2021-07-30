export type Route = {
  path: string;
  Component:
    | (() => JSX.Element)
    | React.LazyExoticComponent<() => JSX.Element>
    | null;
  children?: JSX.Element;
  exact?: boolean;
};
