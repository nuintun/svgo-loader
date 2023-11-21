/**
 * @module index
 */

import { LoaderDefinition } from 'webpack';
import { Config, loadConfig, optimize } from 'svgo';
import { Options } from './interface';

async function resolveConfig(
  configFile?: string | false,
  context?: string
): Promise<Config | null> {
  if (configFile === false) {
    return null;
  }

  // @ts-ignore
  return await loadConfig(configFile, context);
}

export default (function loader(content, sourceMap, additionalData) {
  const callback = this.async();
  const path = this.resourcePath;
  const { configFile, ...options } = this.getOptions();

  resolveConfig(configFile, this.context).then(
    config => {
      const { data } = optimize(content, { ...config, ...options, path });

      callback(null, data, sourceMap, additionalData);
    },
    error => {
      callback(error);
    }
  );
} as LoaderDefinition<Options>);
