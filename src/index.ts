/**
 * @module index
 */

import { schema } from './schema';
import { Options } from './interface';
import { LoaderDefinition } from 'webpack';
import { Config, loadConfig, optimize } from 'svgo';

// 导出接口定义
export { Options };

async function resolveConfig(
  configFile?: string | false,
  context?: string
): Promise<Config | null> {
  if (configFile === false) {
    return null;
  }

  return await loadConfig(configFile as string, context);
}

export default (function loader(content, sourceMap, additionalData) {
  const callback = this.async();
  const path = this.resourcePath;
  const { configFile, ...options } = this.getOptions(schema);

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
