import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnvs, BuildPaths} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnvs) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const PORT = env.port || 3000;
    const config: webpack.Configuration =  buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev,
        port: PORT,
    })

    return config;
};