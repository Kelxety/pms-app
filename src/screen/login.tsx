import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Props } from "../../navigator/RootNavigator";
import { SafeAreaView } from "react-native";
import { Asset } from "expo-asset";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";

type LoginFormInputs = {
  username: string;
  password: string;
};

const Login = ({ navigation }: Props) => {

  // const { isLoading, error, data, refetch } = useQuery<User[], Error>(
  //   ['movies'], fetchMovies
  // )
  const loginSchema = z.object({
    username: z.string(),
    password: z.string(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    if (data.password === "1" && data.username === "Admin") {
      navigation.navigate("Home");
    } else if (data.password === '1' && data.username === '1') {
      navigation.navigate("EngDashboard")
    }
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const [image, setImage] = useState<Asset>();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void (async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-var-requires
      const imageD = Asset.fromModule(require("../../assets/splash.png"));
      await imageD.downloadAsync();
      setImage(imageD);
      setReady(true);
    })();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const _renderImage = () => (
    <Image
      source={{
        uri: image?.localUri || image?.uri,
      }}
      className="h-40 w-40"
    />
  );

  return (
    <SafeAreaView className="h-screen items-center justify-center">
      <View className="flex items-center justify-center space-y-4">
        {ready && _renderImage()}
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCorrect={false}
              className="w-72 rounded-xl border border-gray-300 bg-gray-200 py-6 pl-4"
              placeholder="Username"
              keyboardType="email-address"
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          )}
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.username?.message && (
          <Text className="text-xs text-red-500">
            {errors.username && "Username is required"}
          </Text>
        )}
        <View className="p-[1px]"></View>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCorrect={false}
              className="w-72 rounded-xl border border-gray-300 bg-gray-200 py-6 pl-4"
              placeholder="Password"
              secureTextEntry={true}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          )}
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.password && (
          <Text className="text-xs text-red-500">
            {errors.password && "Password is required"}
          </Text>
        )}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="flex w-72 justify-center rounded-xl bg-blue-400 py-6 pl-4"
        >
          <Text className="mx-auto text-white">Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
