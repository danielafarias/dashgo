import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Daniela Farias</Text>
          <Text color="gray.300" fontSize="small">
            farias.danicris@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Daniela Farias" />
    </Flex>
  );
}
