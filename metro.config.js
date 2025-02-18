const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const tailwindConfig = require("./tailwind.config");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config,{ input: "./app/global.css" });