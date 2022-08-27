import { Content } from "./Content"
import { Box } from "./Box";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
      position: "relative",
      overflow: "visible scroll",
    }}
  >
    {children}
    <Content />
  </Box>
);
