import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import { Layout } from "./Layout";
import { AcmeLogo } from "./AcmeLogo";

export default function App() {
  const { isDark } = useTheme();

  return (
    <Layout>
      <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            AETRO
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Open Source
          </Navbar.Link>
          <Navbar.Link href="#">Lisance</Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Github
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Invite
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}
