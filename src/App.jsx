import "./App.css";

import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";

import { Text } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { IconMessageCircle, IconFile3d } from "@tabler/icons-react";

import TextScreen from "./pages/TextScreen/TextScreen";
import FileScreen from "./pages/FileScreen/FileScreen";

// import '@mantine/dates/styles.css';
// import '@mantine/code-highlight/styles.css';

function App() {
  return (
    <>
      <Text variant="h1" size="xl" fw={700} align="center"></Text>
      <Tabs defaultValue="text">
        <Tabs.List>
          <Tabs.Tab value="text" leftSection={<IconMessageCircle size={12} />}>
            Text
          </Tabs.Tab>
          <Tabs.Tab value="file" leftSection={<IconFile3d size={12} />}>
            Files
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="text">
          <TextScreen />
        </Tabs.Panel>

        <Tabs.Panel value="file">
          <FileScreen />
        </Tabs.Panel>
      </Tabs>
    </>
  );
}

export default App;
