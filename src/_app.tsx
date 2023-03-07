import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStateStatus, Platform } from 'react-native';
import RootNavigator from "../navigator/RootNavigator";
import { focusManager, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAppState } from './hooks/useAppState';
import { useOnlineManager } from "./hooks/useOnlineManager";

function onAppStatusChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
})


export const App = () => {

  useOnlineManager();

  useAppState(onAppStatusChange);
  
 
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
