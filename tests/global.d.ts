/**
 * @module global
 */

/// <reference types="@rspack/core/module" />

declare module '*.svg' {
  const content: string;

  export = content;
}
