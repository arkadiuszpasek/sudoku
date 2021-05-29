/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

export interface Logger {
  log(...value: any[]): void;
  info(...value: any[]): void;
  warn(...value: any[]): void;
  error(...value: any[]): void;
}
class ConsoleLogger {
  log(...value: any[]): void {
    console.log(...value);
  }

  info(...value: any[]): void {
    console.info(...value);
  }

  warn(...value: any[]): void {
    console.warn(...value);
  }

  error(...value: any[]): void {
    console.error(...value);
  }
}

export const logger = new ConsoleLogger() as Logger;
