/**
 * @module svgo
 */

const { loadConfig, optimize } = require('svgo');

async function resolveConfig(configFile, context) {
  if (typeof configFile === 'string') {
    return await loadConfig(configFile, context);
  } else if (configFile !== false) {
    return await loadConfig(null, context);
  }
}

module.exports = function loader(content, sourceMap, additionalData) {
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
};
