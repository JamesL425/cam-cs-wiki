declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare const React: any;
declare namespace React {
  type ReactNode = any;
  type ComponentProps<T extends keyof JSX.IntrinsicElements> = any;
  interface ComponentType<P = any> {
    (props: P): any;
  }
}

declare module 'react' {
  export = React;
}

declare module 'react/jsx-runtime' {
  export default any;
}

declare const require: {
  (name: string): any;
  resolve(id: string): string;
};

declare module 'clsx' {
  export default function clsx(...args: any[]): string;
}

declare module '@docusaurus/Link' {
  const Link: any;
  export default Link;
}

declare module '@docusaurus/useDocusaurusContext' {
  export default function useDocusaurusContext(): any;
}

declare module '@theme/Layout' {
  const Layout: any;
  export default Layout;
}

declare module '@site/src/components/HomepageFeatures' {
  const HomepageFeatures: any;
  export default HomepageFeatures;
}

declare module '@theme/Heading' {
  const Heading: any;
  export default Heading;
}

declare module '@docusaurus/types' {
  export type Config = any;
  const content: any;
  export default content;
}

declare module '@docusaurus/plugin-content-docs' {
  export type SidebarsConfig = any;
  const content: any;
  export default content;
}

declare module '*.module.css' {
  const classes: any;
  export default classes;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
