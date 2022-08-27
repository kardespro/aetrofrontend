import { Text, Spacer } from "@nextui-org/react"
import { Box } from "./Box"
import { Avatar, Grid } from "@nextui-org/react";

export const Content = () => (
  <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
    <Text h2>AETRO</Text>
    <Text size="$lg">
      The Best Discord Boat Cooming !!
    </Text>
    <Spacer y={1} />
    <Text size="$lg">
      Functionally GiveAways , Moderation Commands 
    </Text>
    <Spacer y={1} />
    <Text size="$lg">
      This Bot is Developed by Turkey's Best Software Team 
    </Text>
    <Spacer y={1} />
    <h1 className="">Get to Know Our Amazing Team! </h1>
    <br/>
   

    <Grid.Container gap={2}>
      <Grid>
        <Avatar 
          squared 
          src="https://cdn.discordapp.com/avatars/682607343707488388/a_97c664f49b0258a86e23a9e5ecedb857.gif?size=1024" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          src="https://cdn.discordapp.com/avatars/676442309927370752/6083bd8651259825bc9765b0b0e6dd2e.png?size=1024" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          src="https://cdn.discordapp.com/avatars/745286954752671744/a_58cc2b84cf857dace0dd7f4ad1c432e2.gif?size=1024" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          src="https://cdn.discordapp.com/avatars/542348143379873792/e2764b2ae9b240f6185c492a7bd21da6.png?size=1024" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          src="https://cdn.discordapp.com/avatars/642752306441617417/846e5713a1e2e5446a01b90607e3ea5b.png?size=1024" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          src="https://cdn.discordapp.com/avatars/858951074164244490/8fe285cc7d8ab345bdf42cfc1b96a350.png?size=1024" />
      </Grid>
    </Grid.Container>
  </Box>
);
