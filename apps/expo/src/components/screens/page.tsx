import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";

/**
 * TODO:
 * - loading state
 * - error state
 */

const Page = ({ options, children }) => {
  return (
    <View className="bg-white">
      <Stack.Screen options={options} />
      {children}
    </View>
  );
};

export default Page;
