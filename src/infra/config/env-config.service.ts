import 'dotenv/config';
import { version, name } from '../../../package.json';

export default () => ({
  stage: process.env.STAGE,
  serviceName: name,
  serviceVersion: version,
  port: parseInt(process.env.PORT, 10) || 3002,
  http: {
    timeout: process.env.HTTP_TIMEOUT,
    maxAttempts: process.env.MAX_ATTEMPTS,
    baseDelayMs: process.env.DELAY_MS,
  },
  redis: {
    enable: process.env.REDIS_ENABLE || false,
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    ttl: process.env.REDIS_TTL,
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  otel: {
    url: {
      trace: process.env.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT,
      metrics: process.env.OTEL_EXPORTER_OTLP_METRICS_ENDPOINT,
    },
    interval: process.env.OTEL_METRICS_INTERVAL,
    logUrl: process.env.EXPORTER_LOG_ENDPOINT,
    auth: process.env.EXPORTER_LOG_BASIC_AUTH,
  },
  rabbitmq: {
    host: process.env.RABBITMQ_HOST,
    port: process.env.RABBITMQ_PORT,
    user: process.env.RABBITMQ_USER,
    vhost: process.env.RABBITMQ_VHOST,
    password: process.env.RABBITMQ_PASSWORD,
  },
});
