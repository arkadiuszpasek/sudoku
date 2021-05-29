/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

export interface Logger {
  log(...value: any[]): void;
  info(...value: any[]): void;
  warn(...value: any[]): void;
  error(...value: any[]): void;
}
class ConsoleLogger {
  static log(...value: any[]): void {
    console.log(...value);
  }

  static info(...value: any[]): void {
    console.info(...value);
  }

  static warn(...value: any[]): void {
    console.warn(...value);
  }

  static error(...value: any[]): void {
    console.error(...value);
  }
}

export const logger = new ConsoleLogger() as Logger;
