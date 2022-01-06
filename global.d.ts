declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

type SvgrComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>;
declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}
declare module '*.png' {
  const value: any;
  export default value;
}

/*
 * B is type in BE
 * F is type in FE for custom Filed
 */
declare type GenSorter<B, F = unknown> = Array<
  {
    [P in keyof (B & F)]: 'asc' | 'desc';
  }
>;

interface Console {
  sentry: Function;
}

type LooseObject<T = {}> = { [P in keyof T]?: T[P] } & Record<string, unknown>;
