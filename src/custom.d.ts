declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
    // & { title?: string }
  >;

  export const src: string;

  export default ReactComponent;
}
