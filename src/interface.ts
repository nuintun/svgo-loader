/**
 * @module interface
 */

import { Config } from 'svgo';
import { LoaderContext } from 'webpack';

export type Options = Omit<Config, 'path'> & {
  configFile?: string | false;
};

export type Schema = Parameters<LoaderContext<Options>['getOptions']>[0];
