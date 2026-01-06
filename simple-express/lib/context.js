import { AsyncLocalStorage } from 'async_hooks';
import { logger as defaultLogger } from '../lib/logging.js';


export const storage = new AsyncLocalStorage();

export function getContextLogger() {
  const context = storage.getStore();
  return context ? context.logger : defaultLogger;
}