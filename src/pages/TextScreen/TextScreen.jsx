import React from "react";
import { Textarea } from "@mantine/core";
import { Text } from "@mantine/core";

const TextScreen = () => {
  return (
    <div>
      <Text size="xl" align="center" mt="lg" mb="lg">
        Paste your text here
      </Text>
      <Textarea
        variant="filled"
        size="xl"
        radius="md"
        withAsterisk
        placeholder="Input placeholder"
      />
    </div>
  );
};

export default TextScreen;
