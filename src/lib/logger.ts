// SMART PRINT HUB - Structured Application Logger

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogContext {
  shopId?: string;
  userId?: string;
  orderId?: string;
  agentId?: string;
  correlationId?: string;
  [key: string]: unknown;
}

class Logger {
  private formatMessage(level: LogLevel, message: string, context?: LogContext, error?: Error): string {
    const timestamp = new Date().toISOString();
    const payload = {
      timestamp,
      level: level.toUpperCase(),
      message,
      ...(context || {}),
      ...(error ? { errorName: error.name, errorMessage: error.message, stack: error.stack } : {}),
    };
    return JSON.stringify(payload);
  }

  debug(message: string, context?: LogContext) {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(this.formatMessage('debug', message, context));
    }
  }

  info(message: string, context?: LogContext) {
    console.info(this.formatMessage('info', message, context));
  }

  warn(message: string, context?: LogContext) {
    console.warn(this.formatMessage('warn', message, context));
  }

  error(message: string, error?: Error, context?: LogContext) {
    console.error(this.formatMessage('error', message, context, error));
  }
}

export const logger = new Logger();
